import * as Types from "../constants/constants";
import queryString from "query-string";
import callApi from "../common/callApi";

export const actFetchDataHotTrendRequest = (filters) => {
  const paramQuery = queryString.stringify(filters);
  return (dispatch) => {
    return callApi(`products?${paramQuery}`, "get", null).then((res) => {
      if (res && res.data && res.status === 200) {
        dispatch(actFetchDataHotTrend([...res.data]));
      } else dispatch(actFetchDataHotTrend([]));
    });
  };
};

export const actFetchDataHotTrend = (data) => {
  return {
    type: Types.FETCH_DATAHOTTREND,
    payload: data,
  };
};

export const actFetchDataNewRequest = (filters) => {
  const paramNewProduct = queryString.stringify(filters);
  return (dispatch) => {
    return callApi(`products?${paramNewProduct}`, "get", null).then((res) => {
      if (res && res.data && res.status === 200) {
        dispatch(actFetchDataNew([...res.data]));
      } else dispatch(actFetchDataNew([]));
    });
  };
};

export const actFetchDataNew = (data) => {
  return {
    type: Types.FETCH_DATANEW,
    payload: data,
  };
};

export const actFetchDataDetailRequest = (id) => {
  return (dispatch) => {
    return callApi(`products?id=${id}`, "get", null).then((res) => {
      if (res && res.data && res.status === 200) {
        dispatch(actFetchDataDetail([...res.data]));
      } else dispatch(actFetchDataDetail([]));
    });
  };
};

export const actFetchDataDetail = (data) => {
  return {
    type: Types.FETCH_DATADETAIL,
    payload: data,
  };
};

export const actFetchProductRequest = (filters) => {
  const paramString = queryString.stringify(filters);
  console.log("paramString", paramString);

  return (dispatch) => {
    return callApi(`products?${paramString}`, "get", null).then((res) => {
      if (res && res.data && res.status === 200) {
        dispatch(actFetchProduct([...res.data]));
        dispatch(actFetchFilters(filters));
      } else {
        dispatch(actFetchProduct([]));
      }
    });
  };
};

export const actFetchProduct = (data) => {
  return {
    type: Types.FETCH_PRODUCT,
    payload: data,
  };
};

export const actFetchTotalRowsRequest = (filterTotalRows) => {
  const paramTotalRows = queryString.stringify(filterTotalRows);
  console.log("paramTotalRows", paramTotalRows);
  return (dispatch) => {
    return callApi(`products?${paramTotalRows}`, "get", null).then((res) => {
      if (res && res.data && res.status === 200) {
        dispatch(actFetchTotalRows([...res.data]));
        dispatch(actFetchFilterTotalRow(filterTotalRows));
      } else {
        dispatch(actFetchTotalRows([]));
        dispatch(actFetchFilterTotalRow({}));
      }
    });
  };
};

export const actFetchTotalRows = (data) => {
  return {
    type: Types.FETCH_TOTALROW,
    payload: data,
  };
};

export const actFetchFilters = (filters) => {
  return {
    type: Types.FETCH_FILTERS,
    payload: filters,
  };
};

export const actFetchFilterTotalRow = (filterTotalRows) => {
  return {
    type: Types.FETCH_FILTERTOTALROW,
    payload: filterTotalRows,
  };
};
