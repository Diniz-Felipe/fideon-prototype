import * as S from './styled';

interface RootProps { children: React.ReactNode }

export const Root = ({ children }: RootProps) => {
    return <S.RootContainer>{children}</S.RootContainer>;
};
