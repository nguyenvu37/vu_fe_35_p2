import React from "react";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { useTranslation } from "react-i18next";

const LogoutAdmin = (props) => {
  const { t } = useTranslation("translation");
  const handerAdminLogout = () => {
    if (window.confirm(t("admin.logout?"))) {
      localStorage.removeItem("TokenAdmin");
      NotificationManager.success(t("admin.success-logout"));
      props.history.push("/admin");
    }
  };

  return (
    <div className="link-iteam-btn" style={{ textAlign: "center" }}>
      <button
        onClick={handerAdminLogout}
        className="btn link-iteam-btn"
        id="btnLogout"
      >
        <i className="fas fa-sign-out-alt"></i>
        <label
          style={{ marginLeft: "0.5rem", cursor: "inherit" }}
          htmlFor="btnLogout"
        >
          {t("admin.logout")}
        </label>
      </button>
    </div>
  );
};

export default withRouter(LogoutAdmin);
