import { BottomSheetContentComponent } from "./styled";

interface BottomSheetContentProps {
  children?: React.ReactNode;
}

export const BottomSheetContent = ({children}:BottomSheetContentProps ) => {

  return <BottomSheetContentComponent>{children}</BottomSheetContentComponent>
};