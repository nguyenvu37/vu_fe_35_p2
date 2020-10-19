import React from "react";
import * as config from "../config/config";

const ErrReached = () => {
  return (
    <div className="err-reached">
      <img src={require("../assets/img/error.png")} alt="" />
      <h2>This site can't be reached</h2>
      <h4>{config.host} refused to connect</h4>
      <p style={{ textTransform: "uppercase" }}>ERR_CONNECTION_REFUSED</p>
      <button className="btn btn-primary">Reload</button>
    </div>
  );
};

export default ErrReached;
