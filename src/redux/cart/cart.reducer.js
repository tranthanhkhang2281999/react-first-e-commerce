import { addItemToCart } from './cart.utils';

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
    default:
      return preState;
  }
};

export default cartReducer;
