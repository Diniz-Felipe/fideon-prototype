import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export const ImageBackground = styled.ImageBackground`
    min-height: 220px;

    justify-content: center;
    overflow: hidden;
    
    gap: 12px;
    padding: 12px;
    padding-bottom: 32px;
    border-radius: 32px;
`;

export const Slider = styled.Image`
    height: 50%;
    border-radius: 20px;
    overflow: hidden;
`;

export const Image = styled.Image`
    overflow: hidden;
    height: 100px;
    width: 100px;
    border-radius: 100px;
`;

export const ImageContent = styled.View`
    width: 110px;
    height: 110px;

    background-color: #44444469;
    border-radius: 60px;
    align-items: center;
    justify-content: center;
`;
