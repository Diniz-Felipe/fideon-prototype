import * as S from './styled';
import { ITextProps } from './styled';

type ISubTitleProps = ITextProps & {}

export const SubTitle = ({ children, ...rest }: ISubTitleProps) => {
    return <S.SubTitle {...rest}>{children}</S.SubTitle>;
};