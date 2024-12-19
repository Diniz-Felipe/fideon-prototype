import { TouchableOpacityProps } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { IconContainer } from '@/src/components/Icon/styled';

interface IconProps extends TouchableOpacityProps {
    name: keyof typeof Ionicons.glyphMap;
    size: number;
    color: string;
    onPress: () => void;
}

export const Icon = ({ name, size = 30, color = '#333', onPress, ...rest }: Partial<IconProps>) => {

    return (
        <IconContainer onPress={onPress} {...rest}>
            <Ionicons name={name} size={size} color={color} />
        </IconContainer>
    );
};
