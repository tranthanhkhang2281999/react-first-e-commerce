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
};

export default cartReducer;
