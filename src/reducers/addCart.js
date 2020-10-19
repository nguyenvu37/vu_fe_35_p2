import * as Types from "../constants/constants";

let initialState = [];

const addCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.CALL_CART:
      state = [...action.payload];
      return [...state];
    default:
      return [...state];
  }
};

export default addCart;
