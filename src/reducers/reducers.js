import { combineReducers } from "redux";
import products from "./products";
import dataDetail from "./detail";

const reducer = combineReducers({
  products,
  dataDetail,
});

export default reducer;
