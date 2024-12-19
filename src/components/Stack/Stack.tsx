import * as S from "./styled";

interface StackProps {
  spacing?: number;
  children: React.ReactNode;
}

export const Stack = ({ spacing, children }: StackProps) => {
  return <S.Container spacing={spacing}>{children}</S.Container>;
};
