import { TouchableOpacityProps } from "react-native";
import { ReactNode } from "react";
import * as S from './styled';

interface ICard extends TouchableOpacityProps {
  children: ReactNode;
  variant?: 'horizontal';
}

export const Card = ({ children, variant, onPress ,...rest }: ICard) => {
  return <S.Card 
    variant={variant} 
    onPress={onPress}
    {...rest} 
  >
    {children}
  </S.Card>;
};
