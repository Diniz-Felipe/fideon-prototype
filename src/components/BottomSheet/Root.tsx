import React, { useMemo, memo } from 'react';
import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import { Text } from '@/src/components/Text';
import { BottomSheetContainer } from './styled';

interface CustomBottomSheetProps extends BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  snapPoints?: Array<string | number>;
  children: React.ReactNode;
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  isVisible,
  onClose,
  snapPoints = ['40%', '100%'],
  children,
  ...rest
}) => {

  const memoizedSnapPoints = useMemo(() => snapPoints, [snapPoints]);

  return (
      <BottomSheet
        //index={isVisible ? 0 : -1}
        snapPoints={memoizedSnapPoints}
        onClose={onClose}
        {...rest}
      >
        <BottomSheetContainer>
          {children || <Text.Text>No content available</Text.Text>}
        </BottomSheetContainer>
      </BottomSheet>
  );
};

export default memo(CustomBottomSheet);