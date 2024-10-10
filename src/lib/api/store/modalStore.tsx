import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  modalType: 'help' | 'user' | 'product' | null;
  id?: string | null;
  setIsOpen: (
    isOpen: boolean,
    modalType?: 'help' | 'user' | 'product' | null,
    id?: string | null
  ) => void;
}

export const useModalCallStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  id: null,
  setIsOpen: (status, modalType = null, id = null) =>
    set({ isOpen: status, modalType: modalType, id: id }),
}));
