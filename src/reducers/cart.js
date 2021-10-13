import CART from 'constants/cart';
import { getCookie } from 'helpers';

const initialState = {
  cart: [],
  pending: false,
  error: null,
  user: null,
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

    case CART.CREATSE_USER_CART_PENDING: {
      return {
        ...state,
        error: null,
        user: null,
        pending: true,
        cart: [],
      };
    }

    case CART.CREATSE_USER_CART_SUCCESS: {
      const email = getCookie('email');
      console.log('email :>> ', email);
      return {
        ...state,
        error: null,
        pending: false,
        cart: [],
        user: email,
      };
    }

    case CART.CREATSE_USER_CART_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.payload,
        user: null,
        cart: [],
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
