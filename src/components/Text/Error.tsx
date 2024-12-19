import * as S from './styled';
import { ITextProps } from './styled';

type IErrorProps = ITextProps & {}

export const Error = ({ children, ...rest }: IErrorProps) => {
    return <S.Error {...rest}>{children}</S.Error>;
};