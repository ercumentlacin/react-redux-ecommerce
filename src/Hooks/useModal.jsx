import { useEffect } from 'react';

const useModal = ({ modalRef, isModalShow, handleCloseModal, keyHandler }) => {
  useEffect(() => {
    const handleWindowClick = (event) => {
      const someRefContainTarget = modalRef.current
        ? modalRef.current.contains(event.target)
        : null;

      if (someRefContainTarget) {
        return;
      }
      if (!isModalShow) {
        return;
      }
      if (isModalShow) {
        handleCloseModal();
      }
    };

    if (isModalShow) {
      window.addEventListener('click', handleWindowClick);
      window.addEventListener('keyup', keyHandler);
    }

    return () => {
      if (isModalShow) {
        window.removeEventListener('click', handleWindowClick);
        window.removeEventListener('keyup', keyHandler);
      }
    };
  }, [handleCloseModal, isModalShow, keyHandler, modalRef]);

  return null;
};

export default useModal;
