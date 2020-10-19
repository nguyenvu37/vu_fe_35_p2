import { combineReducers } from "redux";
import products from "./products";
import dataDetail from "./detail";
import totalRow from "./totalRows";
import filters from "./filters";
import users from "./user";
import numCart from "./numCart";
import delCart from "./delCart";
import addCart from "./addCart";

const reducer = combineReducers({
  products,
  dataDetail,
  totalRow,
  filters,
  users,
  numCart,
  delCart,
  addCart,
});

export default reducer;
