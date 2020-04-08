import USER_ACTION_TYPES from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (preState = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...preState, currentUser: action.payload, error: null };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...preState, currentUser: null, error: null };
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
      return { ...preState, error: action.payload };
    default:
      return preState;
  }
};

export default userReducer;
