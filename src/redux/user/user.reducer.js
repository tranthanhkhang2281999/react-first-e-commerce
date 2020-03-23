const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (preState = INITIAL_STATE, action) => {
  const newState = {
    SET_CURRENT_USER: {
      ...preState,
      currentUser: action.payload,
    },
  };

  return newState[action.type] || preState;
};

export default userReducer;
