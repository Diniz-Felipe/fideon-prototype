import * as S from './styled';
import { ITextProps } from './styled';

type ILabelProps = ITextProps & {}

export const Label = ({ children, ...rest }: ILabelProps) => {
    return <S.Label {...rest}>{children}</S.Label>;
};