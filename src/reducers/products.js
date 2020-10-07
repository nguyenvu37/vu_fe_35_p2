import * as Types from "../constants/constants";

let initialState = {
  hotTrend: [],
  newProduct: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATAHOTTREND:
      state.hotTrend = [...action.payload];
      return { ...state };
    case Types.FETCH_DATANEW:
      state.newProduct = [...action.payload];
      return { ...state };
    default:
      return { ...state };
  }
};

export default products;
