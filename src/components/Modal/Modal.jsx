import './modal.style.css';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = (props) => {
  const el = document.createElement('div');
  el.className = 'modal';

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(el);

    return () => modalRoot.removeChild(el);
  }, [el]);

  return createPortal(props.children, el);
};

export default Modal;
