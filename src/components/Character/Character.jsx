import { addToCart } from 'actions/cart';
import Modal from 'components/Modal/Modal';
import useModal from 'Hooks/useModal';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import WrapperCharacter from './scCharacter';

const modalRoot = document.getElementById('modal-root');

const Character = ({ name, image, episode }) => {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);
  const modalRef = useRef(null);

  const handleShowModal = () => {
    setIsModalShow(true);
    modalRoot.classList.add('show');
  };

  const handleCloseModal = () => {
    setIsModalShow(false);
    modalRoot.classList.remove('show');
  };

  const addItemCart = () => {
    dispatch(addToCart({ name, image, price: episode.length * 10 }));
  };

  const keyHandler = (e) =>
    isModalShow && [27].indexOf(e.which) >= 0 && handleCloseModal();

  useModal({
    modalRef,
    isModalShow,
    handleCloseModal,
    keyHandler,
  });

  if (isModalShow) {
    return (
      <Modal>
        <WrapperCharacter ref={modalRef}>
          <span className="close" onClick={handleCloseModal} aria-hidden="true">
            X
          </span>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <span className="price">$ {episode.length * 10}</span>
          <button type="button" onClick={addItemCart}>
            ADD TO CART
          </button>
        </WrapperCharacter>
      </Modal>
    );
  }

  return (
    <WrapperCharacter onClick={handleShowModal}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>$ {episode.length * 10}</span>
    </WrapperCharacter>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  episode: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Character;
