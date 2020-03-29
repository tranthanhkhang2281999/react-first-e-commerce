import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (preState = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return preState;
  }
};

export default shopReducer;
