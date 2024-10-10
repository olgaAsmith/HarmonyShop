'use client';
import React, { useEffect } from 'react';
import { useModalCallStore } from '@/lib/api/store/modalStore';
import ModalHelp from './ModalHelp';
import ModalProduct from './ModalProduct';
import ModalUser from './ModalUser';

export default function Modal() {
  const { isOpen, setIsOpen, modalType } = useModalCallStore();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const renderContent = () => {
    switch (modalType) {
      case 'help':
        return <ModalHelp handleClose={handleClose} />;
      case 'user':
        return <ModalUser handleClose={handleClose} />;
      case 'product':
        return <ModalProduct handleClose={handleClose} />;
      default:
        return null;
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
      {renderContent()}
    </div>
  );
}
