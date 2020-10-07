import axios from "axios";
import * as config from "../config/config";

export default function callApi(endPoint, method = "get", data) {
  return axios({
    method: method,
    url: `${config.host}/${endPoint}`,
    data: data,
  }).catch((err) => {
    console.log("err", err);
  });
}
