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
        pending: true,
      };
    }

    case CART.CREATSE_USER_CART_SUCCESS: {
      const email = getCookie('email');
      console.log('email :>> ', email);
      return {
        ...state,
        error: null,
        pending: false,
        user: email,
      };
    }

    case CART.CREATSE_USER_CART_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }

    case CART.GET_USER_CART_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
        cart: [],
        user: getCookie('email'),
      };
    }

    case CART.GET_USER_CART_SUCCESS: {
      const result = [];
      const fetchResult = action.payload;

      Object.entries(fetchResult).forEach(([key, value]) => {
        result.push({ ...value, id: key });
      });

      return {
        ...state,
        error: null,
        pending: false,
        cart: result,
      };
    }

    case CART.GET_USER_CART_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.payload,
        cart: [],
      };
    }

    case CART.UPDATE_USER_CART_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }

    case CART.UPDATE_USER_CART_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
        cart: action.payload,
      };
    }

    case CART.UPDATE_USER_CART_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
