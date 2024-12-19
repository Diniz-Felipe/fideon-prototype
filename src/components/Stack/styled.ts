import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)<{ spacing?: number }>`
  gap: ${({ spacing }) => spacing || 0}px;
`;

export const InlineComponent = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  gap: 8px;
  border-width: 1px;
  border-color: transparent;
`;