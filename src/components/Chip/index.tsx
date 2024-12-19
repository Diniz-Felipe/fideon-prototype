import { TouchableOpacityProps } from 'react-native';
import { Text } from '@/src/components/Text';
import * as S from './styled'

type IChip = {
    name: string;
} & TouchableOpacityProps;

export const Chip = ({ name="", ...rest }: IChip) => {
    return <S.Chip {...rest}>
        <Text.Text>{name}</Text.Text>
    </S.Chip>
}