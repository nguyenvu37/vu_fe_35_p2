import React, { useState } from "react";
import NotificationManager from "react-notifications/lib/NotificationManager";
import callApi from "../../../common/callApi";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

const containerDiv = {
  position: "absolute",
  top: "20%",
  left: "5%",
  right: "5%",
};

const warpDivLogin = {
  width: "400px",
  padding: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#333",
  border: 0,
  borderRadius: "1rem",
  boxShadow: "0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)",
  color: "#fff",
};

const inputGroupStype = {
  borderRadius: "1rem",
  fontSize: "17px",
  padding: "20px",
  backgroundColor: "#fff",
  color: "#333",
};

const LoginAdmin = (props) => {
  const { t } = useTranslation("translation");
  const [valueUserName, setValueUserName] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    callApi(`users?userName=${valueUserName}`, "Get", null).then((res) => {
      if (res && res.status === 200) {
        if (
          res.data[0] &&
          res.data[0].password === valuePassword &&
          res.data[0].role === "admin"
        ) {
          localStorage.setItem("TokenAdmin", JSON.stringify(res.data[0]));
          NotificationManager.success(t("admin.success"));
          props.history.push("/admin/dashboard");
        } else NotificationManager.error(t("admin.err"));
      }
    });
  };

  return (
    <div className="w-100 h-100">
      <div style={containerDiv}>
        <form onSubmit={handleOnSubmit}>
          <div style={warpDivLogin}>
            <div className="w-100 text-center">
              <h1 className="mb-3">{t("admin.title")}</h1>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: "10px 0",
                }}
              >
                {t("admin.username")}:{" "}
              </label>
              <input
                onChange={(e) => {
                  setValueUserName(e.target.value);
                }}
                type="text"
                name="username"
                className="form-control"
                style={inputGroupStype}
                value={valueUserName}
              />
            </div>
            <div className="form-group">
              <label
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: "10px 0",
                }}
              >
                {t("admin.password")}:{" "}
              </label>
              <input
                onChange={(e) => {
                  setValuePassword(e.target.value);
                }}
                type="password"
                name="password"
                className="form-control"
                style={inputGroupStype}
                value={valuePassword}
              />
            </div>
            <div className="w-100 my-3 text-center">
              <button className="myButton">{t("admin.btn-login")}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(LoginAdmin);
