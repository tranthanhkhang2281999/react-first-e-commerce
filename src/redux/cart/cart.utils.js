export const addItemToCart = (cartItems, cartItemToAdd) => {
  let index = cartItems.findIndex(
    cartItem => cartItem.name === cartItemToAdd.name,
  );

  if (index < 0) return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  const newCartItems = [...cartItems];
  newCartItems[index].quantity++;

  return newCartItems;
};
