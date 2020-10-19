import React from "react";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation("translation");
  return (
    <div>
      {" "}
      <section className="notfound">
        <div className="notfound__content">
          <div className="notfound__content__img">
            <img
              src={require("../../../assets/img/404-page/notfound.png")}
              alt=""
            />
          </div>
          <div className="notfound__content__notification">
            <h2>{t("not-found")}</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
