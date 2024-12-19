import { styled } from "styled-components/native";
import { BottomSheetView } from "@gorhom/bottom-sheet";

export const BottomSheetContainer = styled(BottomSheetView)`	
    flex: 1;
    gap: 16px;
`;

export const BottomSheetHeaderComponent = styled(BottomSheetView)`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;

    border-bottom-width: .5px;
    border-bottom-color: #dddddd;
`;

export const BottomSheetContentComponent = styled(BottomSheetView)`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    gap: 16px;
`;

//background-color: ${() => theme.colors.background};
//border-bottom-color: ${({ theme }) => theme.colors.border};
