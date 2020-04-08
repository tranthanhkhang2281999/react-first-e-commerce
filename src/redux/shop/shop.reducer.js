import SHOP_ACTION_TYPES from './shop.types.js';

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: undefined,
  collections: null
};

const shopReducer = (preState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START:
      return {
        ...preState,
        isFetching: true
      };
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE:
      return {
        ...preState,
        isFetching: false,
        errorMessage: action.payload
      };
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...preState,
        isFetching: false,
        collections: action.payload
      };
    default:
      return preState;
  }
};

export default shopReducer;
