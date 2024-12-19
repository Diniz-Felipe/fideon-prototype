import * as S from './styled'

export const Inline = ({ children }: { children: React.ReactNode })=> {
  return <S.InlineComponent>{children}</S.InlineComponent>
}