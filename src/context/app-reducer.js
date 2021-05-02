import {
  UPDATE_STATE,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  DELETE_CART,
} from "./app-action";

const AppReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        prodcuts: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart_products: action.payload,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart_products: action.payload,
      };
    case INCREASE_PRODUCT:
      return {
        ...state,
        cart_products: action.payload,
      };
    case DECREASE_PRODUCT:
      return {
        ...state,
        cart_products: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        cart_products: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
