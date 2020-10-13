import * as Types from "../constants/constants";

let initialState = { id: "" };

const delCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.DEL_CART:
      state.id = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default delCart;
