import CART from 'constants/cart';

import { CartService, UsersService } from '../services';

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

const getUserCartPending = () => ({
  type: CART.GET_USER_CART_PENDING,
});

const getUserCartSuccess = (data) => ({
  type: CART.GET_USER_CART_SUCCESS,
  payload: data,
});

const getUserCartFailure = (error) => ({
  type: CART.GET_USER_CART_FAILURE,
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

const addCartItemAction = (cartItem) => async (dispatch) => {
  dispatch(createUserCartPending());
  try {
    const { data } = await CartService.addCartItem(cartItem);
    dispatch(createUserCartSuccess(data));
  } catch (error) {
    dispatch(createUserCartFailure(error));
  }
};

const getCartAction = () => async (dispatch) => {
  dispatch(getUserCartPending());
  try {
    const { data } = await CartService.getCart();
    dispatch(getUserCartSuccess(data));
  } catch (error) {
    dispatch(getUserCartFailure(error));
  }
};

export default createCart;

export {
  addCartItemAction,
  addToCart,
  decreaseCartItemCount,
  getCartAction,
  increaseCartItemCount,
  removeFromCart,
};
