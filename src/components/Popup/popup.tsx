// Popup.tsx
import React, { memo } from "react";
import { Modal, Portal } from "react-native-paper";
import { containerStyle } from "./styled";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup = ({ isVisible, onClose, children }: PopupProps) => {
  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={onClose}
        contentContainerStyle={containerStyle}
      >
        {children}
      </Modal>
    </Portal>
  );
};

export default memo(Popup);
