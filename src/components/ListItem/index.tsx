import { TouchableOpacityProps } from 'react-native';
import * as S from './styled';

interface ListItemProps extends TouchableOpacityProps {
    children: React.ReactNode;
    onPress: () => void;
}

export const ListItem = ({ children, onPress, ...rest }: Partial<ListItemProps>) => {
    return <S.ListItem onPress={onPress} {...rest}>{children}</S.ListItem>;
};