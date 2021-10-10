import CART from 'constants/cart';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART.ADD_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case CART.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case CART.INCREASE_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case CART.DECREASE_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
