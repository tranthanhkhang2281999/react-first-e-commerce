const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (preState = INITIAL_STATE, action) => {
  const todo = {
    SET_CURRENT_USER: {
      ...preState,
      currentUser: action.payload
    }
  };

  return todo[action.type] || preState;
};

export default userReducer;
