import { combineReducers } from "redux";
import products from "./products";
import dataDetail from "./detail";
import totalRow from "./totalRows";
import filters from "./filters";

const reducer = combineReducers({
  products,
  dataDetail,
  totalRow,
  filters,
});

export default reducer;
