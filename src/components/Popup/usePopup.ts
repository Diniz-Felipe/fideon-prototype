import { useState, useCallback } from 'react';

interface PopupState {
  [key: string]: boolean;
}

const usePopup = () => {
  const [popupStates, setPopupStates] = useState<PopupState>({});

  const openPopup = useCallback((id: string) => {
    setPopupStates((prev) => ({ ...prev, [id]: true }));
  }, []);

  const closePopup = useCallback((id: string) => {
    setPopupStates((prev) => ({ ...prev, [id]: false }));
  }, []);

  const isPopupVisible = useCallback(
    (id: string) => !!popupStates[id],
    [popupStates]
  );

  return {
    isPopupVisible,
    openPopup,
    closePopup,
  };
};

export { usePopup };