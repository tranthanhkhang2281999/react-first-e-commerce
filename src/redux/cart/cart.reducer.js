import CART_ACTION_TYPES from './cart.types';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (preState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...preState,
        hidden: !preState.hidden
      };
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...preState,
        cartItems: addItemToCart(preState.cartItems, action.payload)
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return {
        ...preState,
        cartItems: removeItemFromCart(preState.cartItems, action.payload)
      };
    case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...preState,
        cartItems: clearItemFromCart(preState.cartItems, action.payload)
      };
    case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...preState,
        cartItems: []
      };
    default:
      return preState;
  }
};

export default cartReducer;
