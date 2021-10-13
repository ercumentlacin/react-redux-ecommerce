import CART from 'constants/cart';

import { UsersService } from '../services';

const addToCart = (data) => ({
  type: CART.ADD_CART,
  payload: data,
});

const removeFromCart = (id) => ({
  type: CART.REMOVE_CART,
  payload: id,
});

const increaseCartItemCount = (id) => ({
  type: CART.INCREASE_CART,
  payload: id,
});

const decreaseCartItemCount = (id) => ({
  type: CART.DECREASE_CART,
  payload: id,
});

const createUserCartPending = () => ({
  type: CART.CREATSE_USER_CART_PENDING,
});

const createUserCartSuccess = (data) => ({
  type: CART.CREATSE_USER_CART_SUCCESS,
  payload: data,
});

const createUserCartFailure = (error) => ({
  type: CART.CREATSE_USER_CART_FAILURE,
  payload: error,
});

const createCart = (userCart) => async (dispatch) => {
  dispatch(createUserCartPending());
  try {
    const { data } = await UsersService.createUserCart(userCart);
    dispatch(createUserCartSuccess(data));
  } catch (error) {
    dispatch(createUserCartFailure(error));
  }
};

export default createCart;

export {
  addToCart,
  decreaseCartItemCount,
  increaseCartItemCount,
  removeFromCart,
};
