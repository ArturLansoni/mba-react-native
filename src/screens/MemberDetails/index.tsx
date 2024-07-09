import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Center, Spacer } from '@components';
import { dateStringToDDMMYYYY, openLink, socialLogoResolver } from '@utils';
import { useMemberDetailsPage } from './hooks/useMemberDetails';
import { useMembers } from '../Members/hooks/useMembers';

export function MemberDetails() {
    const { t, styles } = useMemberDetailsPage();
    const { member, canGoBack, canGoNext, goBack, goNext } = useMembers();

    return (
        <View style={styles.page}>
            <ScrollView>
                <Center>
                    <Image style={styles.image} source={{ uri: member?.imageURL }} />
                    <Text style={styles.name}>{member?.name}</Text>
                    <Text style={styles.role}>{member?.role}</Text>
                </Center>
                <Spacer size={32} />
                <View style={styles.socialContainer}>
                    {member?.socials.map((social) =>
                        <Pressable key={social.network} onPress={() => openLink(social.url)}>
                            <Center>
                                <Image style={styles.social} source={socialLogoResolver(social.network)} />
                                <Text style={styles.text}>{social.username}</Text>
                            </Center>
                        </Pressable>)}
                </View>

                <Text style={styles.description}>{member?.description}</Text>
                <Text style={styles.text}>{t('members_details_updated')} {dateStringToDDMMYYYY(member?.updatedAt ?? '')}</Text>
            </ScrollView>
            <Spacer />
            <View style={styles.buttonsContainer}>
                {canGoBack &&
                    <Pressable style={styles.buttons} onPress={goBack}>
                        <Text style={styles.buttonTitle}>{t('members_details_back_button')}</Text>
                    </Pressable>}
                <Spacer />
                {canGoNext && <Pressable style={styles.buttons} onPress={goNext}>
                    <Text style={styles.buttonTitle}>{t('members_details_next_button')}</Text>
                </Pressable>}
            </View>
        </View >
    );
}



