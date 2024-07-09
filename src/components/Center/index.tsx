import { View } from "react-native";

interface CenterProps {
    children: React.ReactNode;
}

export function Center({ children }: CenterProps) {
    return <View style={{ justifyContent: 'center', alignItems: 'center' }} >
        {children}
    </View>;
}