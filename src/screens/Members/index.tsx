import React, { useEffect } from 'react';
import { FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { useMembersPage } from './hooks/useMembersPage';
import { AsyncStatus } from '@utils';
import { SearchInput } from 'src/components/SearchInput';
import { Spacer } from '@components';
import { useMembers } from './hooks/useMembers';
import { Empty } from './components/Empty';

export function Members() {
  const { t, styles, goToMemberDetails } = useMembersPage();
  const { members, status, fetch, filter, selectMember } = useMembers();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={styles.page}>

      <Text style={styles.title}>{t('members_title')}</Text>
      <Text style={styles.subtitle}>{t('members_subtitle')}</Text>

      <SearchInput onFilter={filter} />

      <FlatList
        scrollEnabled
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl
          refreshing={status === AsyncStatus.loading}
          onRefresh={fetch} />}
        data={members}
        renderItem={({ item, index }) =>
          status === AsyncStatus.success ?
            <TouchableOpacity onPress={() => {
              selectMember(index);
              goToMemberDetails();
            }} style={styles.item}>
              <Image source={{ uri: item.imageURL }} style={styles.itemImage} />
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>{item.role}</Text>
              </View>
            </TouchableOpacity>
            : <></>}

        ItemSeparatorComponent={() => <Spacer size={12} />}
        ListEmptyComponent={<Empty />}
      />
      <Spacer size={12} />
    </View>
  );
}

