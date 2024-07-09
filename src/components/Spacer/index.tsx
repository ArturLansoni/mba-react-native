import { DimensionValue, View } from "react-native";

interface SpacerProps {
    horizontal?: boolean;
    size?: DimensionValue;
}

export function Spacer({ horizontal, size }: SpacerProps) {
    const defaultValue = 'auto';
    return <View style={{
        flex: (!horizontal && !size) ? 1 : undefined,
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
    }} />;
}