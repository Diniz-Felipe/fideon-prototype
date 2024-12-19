import { TextProps } from "react-native";
import styled from "styled-components/native";

export interface ITextProps extends TextProps {};

export const Text = styled.Text<ITextProps>`
    font-size: 16px;
    color: #ccc;
`;
export const Title = styled.Text<ITextProps>`
    font-size: 20px;
    font-weight: bold;
    color: #444;
`;
export const SubTitle = styled.Text<ITextProps>`
    font-size: 16px;
    color: black;
`;
export const Error = styled.Text<ITextProps>`
    font-size: 16px;
    color: red;
`;
export const Label = styled.Text<ITextProps>`
    font-size: 16px;
    color: black;
`;