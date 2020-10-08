import * as Types from "../constants/constants";

let initialState = [];

const totalRow = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_TOTALROW:
      state = [...action.payload];
      return [...state];
    default:
      return [...state];
  }
};

export default totalRow;
