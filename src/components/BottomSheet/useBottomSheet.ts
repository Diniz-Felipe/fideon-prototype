import { useState, useCallback } from 'react';

export const useBottomSheet = () => {
  const [visibleSheets, setVisibleSheets] = useState<Record<string, boolean>>({});

  const openSheet = useCallback((sheetId: string) => {
    setVisibleSheets((prev) => ({ ...prev, [sheetId]: true }));
  }, []);

  const closeSheet = useCallback((sheetId: string) => {
    setVisibleSheets((prev) => ({ ...prev, [sheetId]: false }));
  }, []);

  const isSheetVisible = useCallback(
    (sheetId: string) => !!visibleSheets[sheetId],
    [visibleSheets]
  );

  return {
    openSheet,
    closeSheet,
    isSheetVisible,
  };
};

