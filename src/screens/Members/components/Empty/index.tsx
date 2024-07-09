import { Images } from "@assets";
import { Center } from "@components";
import { Image, Text } from "react-native";
import { useMembersPage } from "../../hooks/useMembersPage";

export function Empty() {
    const { t, styles } = useMembersPage();
    return (
        <Center>
            <Image source={Images.illustrations.empty} style={styles.emptyImage} />
            <Text style={styles.text}>{t('members_empty')}</Text>
        </Center>
    );
}