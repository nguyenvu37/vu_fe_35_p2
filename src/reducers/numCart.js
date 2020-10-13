import * as Types from "../constants/constants";

let initialState = {
  num: 0,
};

const numCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.NUM_CART:
      console.log("action", action.payload);
      state.num = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default numCart;
