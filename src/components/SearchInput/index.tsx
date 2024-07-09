import { useState } from "react";
import { useTranslation } from "react-i18next";
import { themeSchema } from "@utils";
import { stylesWithTheme } from "./styles";
import { Image, NativeSyntheticEvent, Pressable, TextInput, TextInputChangeEventData, View } from "react-native";
import { Images } from "@assets";

interface SearchInputProps {
    onFilter: (value: string) => void;
}

export function SearchInput({ onFilter }: SearchInputProps) {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const styles = stylesWithTheme(themeSchema().theme);

    function handleFilter(event: NativeSyntheticEvent<TextInputChangeEventData>) {
        onFilter(event.nativeEvent.text);
        setValue(event.nativeEvent.text);
    }
    function clear() {
        onFilter('');
        setValue('');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={Images.icons.search} />
            <TextInput style={styles.input} value={value} placeholder={t('search')} onChange={handleFilter} />
            {value && <Pressable onPress={clear}>
                <Image style={styles.icon} source={Images.icons.close} />
            </Pressable>}
        </View>
    );
}