import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

function Modal({ closeModal }) {
  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.modal} onClick={handleClickOutside}>
      <div className={styles['modal-content']}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <section>
          <a href="./index.html">Go to home</a>
          <button>start losing weight</button>
          <div style={{ padding: '20px', borderBottom: 'solid 1px' }}>
            <h1>Tu ingesta diaria recomendada de calorías es</h1>
            <h1>2800</h1>
          </div>
          <div>
            <ol>
              <li>productos de harina</li>
              <li>leche</li>
              <li>carne roja</li>
              <li>carnes ahumadas</li>
            </ol>
          </div>
          <button>comienza a perder peso</button>
        </section>
      </div>
    </div>
  );
}

export default App;
