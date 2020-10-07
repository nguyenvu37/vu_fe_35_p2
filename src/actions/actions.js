import * as Types from "../constants/constants";
import queryString from "query-string";
import callApi from "../common/callApi";

export const actFetchDataHotTrendRequest = (filters) => {
  const paramQuery = queryString.stringify(filters);
  return (dispatch) => {
    return callApi(`products?${paramQuery}`, "get", null).then((res) => {
      if (res && res.data && res.status === 200) {
        dispatch(actFetchDataHotTrend([...res.data]));
      }
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
      }
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
