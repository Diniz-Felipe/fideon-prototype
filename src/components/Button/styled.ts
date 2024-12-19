import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface RootContainerProps {};

interface ActionContainerProps {
    variant?: 'outline' | 'solid' | 'ghost';
    disabled?: boolean;
};

export const RootContainer = styled.TouchableOpacity<RootContainerProps>`
    gap: 12px;
`;

export const ActionContainer = styled.TouchableOpacity<ActionContainerProps & RootContainerProps>`
    padding: 12px;
    border-radius: 8px;
    
    gap: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    ${({ variant, disabled }) => {
        switch (variant) {
            case 'outline':
                return css`
                    border: 1px solid #ccc;
                    background-color: transparent;
                    opacity: ${disabled ? 0.5 : 1};
                `;
            case 'ghost':
                return css`
                    background-color: transparent;
                    opacity: ${disabled ? 0.5 : 1};
                `;
            default: // solid
                return css`
                    background-color: #444;
                    opacity: ${disabled ? 0.5 : 1};
                `;
        }
    }}
`;

export const ActionText = styled.Text<ActionContainerProps>`
    font-size: 16px;
    font-weight: bold;
    
    ${({ variant }) => {
        switch (variant) {
            case 'outline':
            case 'ghost':
                return css`
                    color: #000;
                `;
            default: // solid
                return css`
                    color: #FFF;
                `;
        }
    }}
`;

export const ActionsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    /* justify-content: flex-end; */
    justify-content: center;

    gap: 12px;
`;