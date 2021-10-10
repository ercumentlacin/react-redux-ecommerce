import CART from 'constants/cart';

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

export {
  addToCart,
  decreaseCartItemCount,
  increaseCartItemCount,
  removeFromCart,
};
