import * as Types from "../constants/constants";

let initialState = [];

const dataDetail = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATADETAIL:
      state = [...action.payload];
      return [...state];
    default:
      return [...state];
  }
};

export default dataDetail;
