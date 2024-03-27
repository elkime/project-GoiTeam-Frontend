import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className={styles.modal} onClick={handleClickOutside}>
          <div className={styles['modal-content']}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <p>Modal Content Here</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
