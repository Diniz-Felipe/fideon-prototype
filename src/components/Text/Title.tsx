import * as S from './styled';
import { ITextProps } from './styled';

type ITitleProps = ITextProps & {}

export const Title = ({ children, ...rest }: ITitleProps) => {
    return <S.Title {...rest}>{children}</S.Title>;
};