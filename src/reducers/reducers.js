import { combineReducers } from "redux";
import products from "./products";
import dataDetail from "./detail";
import totalRow from "./totalRows";
import filters from "./filters";
import users from "./user";

const reducer = combineReducers({
  products,
  dataDetail,
  totalRow,
  filters,
  users,
});

export default reducer;
