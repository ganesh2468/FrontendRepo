const signinReducer = (state = "Not-Signed", action) => {
  switch (action.type) {
    case "SIGNIN":
      state="Signed-In"
      return state;
    default:
      return state;
  }
};

export default signinReducer;
