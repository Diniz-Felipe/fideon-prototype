import styled from "styled-components/native";

interface IForm {
    variant: "column" | "row"
}

export const Form = styled.View<IForm>`
    max-width: 100%;
    flex-direction: ${({ variant }) => variant};
    
    padding-right: 5px;
    border-radius: 10px;
    gap: 8px;
`;


export const TextInput = styled.TextInput`
    width: 100%;
    background-color: #fff;
    border-radius: 8px;

    padding: 16px 24px;
`;