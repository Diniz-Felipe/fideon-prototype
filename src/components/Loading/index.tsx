import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import styled from "styled-components/native";

type ILoading = ActivityIndicatorProps;

const LoadingStyled = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Loading = ({ color = 'black', size = 'large' }: ILoading) => {
    return (
        <LoadingStyled>
            <ActivityIndicator color={color} size={size} />
        </LoadingStyled>
    )
}