<<<<<<< HEAD
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
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...preState,
        hidden: !preState.hidden
      };
    case 'ADD_ITEM':
      return {
        ...preState,
        cartItems: addItemToCart(preState.cartItems, action.payload)
      };
    case 'REMOVE_ITEM':
      return {
        ...preState,
        cartItems: removeItemFromCart(preState.cartItems, action.payload)
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...preState,
        cartItems: clearItemFromCart(preState.cartItems, action.payload)
      };
    default:
      return preState;
  }
=======
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (preState = INITIAL_STATE, action) => {
  const todo = {
    TOGGLE_CART_HIDDEN: {
      ...preState,
      hidden: !preState.hidden,
    },
    ADD_ITEM: {
      ...preState,
      cartItems: addItemToCart(preState.cartItems, action.payload),
    },
  };

  return todo[action.type] || preState;
>>>>>>> 3da4b773f416140875d71cfa78c75c1583709f10
};

export default cartReducer;
