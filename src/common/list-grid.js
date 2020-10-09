import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../actions/actions";

const BtnGridList = (props) => {
  const filters = useSelector((state) => state.filters.filters);
  const dispatchProduct = useDispatch();
  const dispatchTotalRow = useDispatch();

  const handleChangePage = (key) => {
    const { category, species } = filters;
    if (key === "grid") {
      dispatchProduct(
        actFetchProductRequest({
          ...filters,
          _limit: 6,
          _page: 1,
        })
      );

      dispatchTotalRow(
        actFetchTotalRowsRequest({
          category: category,
          species: species,
        })
      );
      props.history.push("/grid");
    }

    if (key === "list") {
      props.history.push("/list");
    }
  };
  return (
    <div className="pagination__list">
      <button
        className="btn-grid-list"
        onClick={() => handleChangePage("grid")}
      >
        <i className="fas fa-th-large"></i>
      </button>
      <button
        className="btn-grid-list"
        onClick={() => handleChangePage("list")}
      >
        <i className="fas fa-list"></i>
      </button>
    </div>
  );
};

export default withRouter(BtnGridList);
