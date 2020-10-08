import * as Types from "../constants/constants";

let initialState = {
  filters: {},
  filterToTalRow: {},
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_FILTERS:
      state.filters = { ...action.payload };
      return { ...state };
    case Types.FETCH_FILTERTOTALROW:
      state.filterToTalRow = { ...action.payload };
      return { ...state };
    default:
      return { ...state };
  }
};

export default filters;
