const findCartItemIndex = (cartItems, item) => {
  return cartItems.findIndex(cartItem => cartItem.id === item.id);
};

const handleCartItems = (cartItems, itemIndex, work = 'add') => {
  const newCartItems = [...cartItems];
  work === 'remove'
    ? (newCartItems[itemIndex] = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity - 1
      })
    : (newCartItems[itemIndex] = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + 1
      });

  return newCartItems;
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  let index = findCartItemIndex(cartItems, cartItemToAdd);
  if (index < 0) return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  return handleCartItems(cartItems, index, 'add');
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  let index = findCartItemIndex(cartItems, cartItemToRemove);

  if (cartItems[index].quantity === 1)
    return clearItemFromCart(cartItems, cartItems[index]);

  return handleCartItems(cartItems, index, 'remove');
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};
