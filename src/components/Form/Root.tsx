import { ReactNode } from 'react';
import * as S from './styled';

interface IRootProps {
    children: ReactNode;
    variant?: "column" | "row"
}

export const Root = ({ children, variant="column" }: IRootProps) => {
    return <S.Form variant={variant}>{children}</S.Form>
}