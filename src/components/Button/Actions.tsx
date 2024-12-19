import * as S from './styled';

interface ActionsProps {
    children: React.ReactNode;
}

export const Actions = ({ children }: ActionsProps) => {
    return <S.ActionsContainer>{children}</S.ActionsContainer>;
};