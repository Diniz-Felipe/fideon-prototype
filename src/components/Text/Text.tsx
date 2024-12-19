import * as S from './styled';
import { ITextProps } from './styled';

type IText = ITextProps & {}

export const Text = ({ children, ...rest }: IText) => {
    return <S.Text {...rest}>{children}</S.Text>;
};