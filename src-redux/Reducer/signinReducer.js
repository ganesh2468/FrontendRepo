const signinReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGNIN":
      return !state;

    default:
      return state;
  }
};

export default signinReducer;
