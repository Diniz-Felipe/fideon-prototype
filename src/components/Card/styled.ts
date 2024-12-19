import styled, { css } from "styled-components/native";

interface CardProps {
    variant?: 'horizontal';
    disabled?: boolean;
};

export const Card = styled.TouchableOpacity<CardProps>`
    
    ${({ variant, disabled }) => {
        switch (variant) {
            case 'horizontal':
                return css`
                    height: auto;
                    width: auto;

                    /* align-items: center; */
                    justify-content: center;
                    
                    background-color: #ddd;

                    border-radius: 12px;
                    border-color: #ccc;

                    /* margin-left: 8px; */
                    /* margin-right: 8px; */

                    padding: 12px;
                    gap: 12px;
                `;
            default: // solid
                return css`
                    flex-direction: row;

                    border-width: 1px;
                    border-radius: 12px;
                    border-color: #ccc;

                    padding: 12px;
                    gap: 12px; 
                    margin-left: 12px;

                    background-color: #fff;
                `;
        }
    }}
`;

/*export const Card = styled.TouchableOpacity`    
    border-width: 1px;
    border-radius: 12px;
    border-color: #ccc;

    padding: 12px;
    gap: 12px; 
    margin-left: 12px;

    background-color: #fff;

`;*/