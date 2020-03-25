export const addItemToCart = (cartItems, cartItemToAdd) => {
  // let index = cartItems.findIndex(cartItem => cartItem.id === cartItemToAdd.id);

  // if (index < 0) return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  // const newCartItems = [...cartItems];
  // newCartItems[index].quantity++;

  // return newCartItems;

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
