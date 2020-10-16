import * as Types from "../constants/constants";

let initialState = {
  num: 1,
};

const quantity = (state = initialState, action) => {
  switch (action.type) {
    case Types.QUANTITY:
      state.num = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default quantity;
