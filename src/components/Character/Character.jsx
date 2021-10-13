/* eslint-disable no-debugger */
import { addCartItemAction, updateCartAction } from 'actions/cart';
import Modal from 'components/Modal/Modal';
import useModal from 'Hooks/useModal';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import WrapperCharacter from './scCharacter';

const modalRoot = document.getElementById('modal-root');

const Character = ({ name, image, episode, id, cartList }) => {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);
  const modalRef = useRef(null);

  const history = useHistory();

  const handleShowModal = () => {
    setIsModalShow(true);
    modalRoot.classList.add('show');
  };

  const handleCloseModal = () => {
    setIsModalShow(false);
    modalRoot.classList.remove('show');
  };

  const addItemCart = () => {
    const data = {
      name,
      image,
      price: episode.length * 10,
      characterId: id,
      quantity: 1,
    };

    const itemInBasket = cartList.some((item) => item.characterId === id);
    if (!itemInBasket) {
      dispatch(addCartItemAction(data));
    } else {
      const newCart = cartList.map((item) => {
        if (item.characterId === id) {
          item.quantity += 1;
        }
        return item;
      });

      dispatch(updateCartAction(newCart));
    }

    history.push('/');
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
  id: PropTypes.number.isRequired,
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Character;
