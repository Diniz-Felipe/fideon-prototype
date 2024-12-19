import { BottomSheetHeaderComponent } from "./styled";

interface BottomSheetHeaderProps {
  children?: React.ReactNode;
}

export const BottomSheetHeader = ({children}:BottomSheetHeaderProps ) => {

  return <BottomSheetHeaderComponent>{children}</BottomSheetHeaderComponent>
};
