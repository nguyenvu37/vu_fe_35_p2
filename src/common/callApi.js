import axios from "axios";
import * as config from "../config/config";

export default function callApi(endPoint, method = "get", data) {
  return axios({
    method: method,
    url: `${config.host}/${endPoint}`,
    data: data,
  }).catch(function (error) {
    alert("Error: ERR_CONNECTION_REFUSED Please: Reload Site");
    console.log(error.config);
  });
}
