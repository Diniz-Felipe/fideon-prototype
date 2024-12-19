import { Container } from "@/src/components/Header/styled";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};
