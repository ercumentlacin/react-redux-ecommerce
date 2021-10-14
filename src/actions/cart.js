import CART from 'constants/cart';

import { CartService } from '../services';

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

const updateUserCartPending = () => ({
  type: CART.UPDATE_USER_CART_PENDING,
});

const updateUserCartSuccess = (data) => ({
  type: CART.UPDATE_USER_CART_SUCCESS,
  payload: data,
});

const updateUserCartFailure = (error) => ({
  type: CART.UPDATE_USER_CART_FAILURE,
  payload: error,
});

const getCartAction = () => async (dispatch) => {
  dispatch(getUserCartPending());
  try {
    const { data } = await CartService.getCart();
    dispatch(getUserCartSuccess(data));
  } catch (error) {
    dispatch(getUserCartFailure(error));
  }
};

const addCartItemAction = (cartItem) => async (dispatch) => {
  dispatch(createUserCartPending());
  try {
    const { data } = await CartService.addCartItem(cartItem);
    dispatch(createUserCartSuccess(data));
  } catch (error) {
    dispatch(createUserCartFailure(error));
  } finally {
    dispatch(getCartAction());
  }
};

const updateCartAction = (cartItem) => async (dispatch) => {
  dispatch(updateUserCartPending());
  try {
    const { data } = await CartService.updateCartItem(cartItem);
    dispatch(updateUserCartSuccess(data));
  } catch (error) {
    dispatch(updateUserCartFailure(error));
  } finally {
    dispatch(getCartAction());
  }
};

export { addCartItemAction, getCartAction, updateCartAction };
