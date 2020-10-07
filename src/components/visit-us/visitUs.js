import React from "react";
import { useTranslation } from "react-i18next";
import background5 from "../../assets/img/home/background5.jpg";

const VisitUs = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="visit">
      <div className="visit__title">{t("visit.title")}</div>
      <div
        className="visit__content"
        style={{
          width: "80%",
          margin: "0 auto",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div
          className="visit__content__background"
          style={{
            background: `url(${background5}) no-repeat center center`,
            height: "400px",
            margin: "0 auto",
            border: "1px solid #fff",
            borderRadius: "10px",
            backgroundSize: "cover",
          }}
        >
          <div
            className="visit__content__wrapper"
            style={{
              position: "absolute",
              top: "20%",
              left: "5%",
              background: "#fff",
              width: "200px",
              padding: "20px 10px 40px",
              borderRadius: "10px",
              textAlign: "center",
              fontFamily: "UTMAvoBold",
            }}
          >
            <h3 style={{ fontFamily: "Lobster, cursive", fontSize: "25px" }}>
              {t("visit.h3")}
            </h3>
            <div
              className="visit__content__wrapper__schedule"
              style={{ marginTop: "10px" }}
            >
              <font style={{ verticalAlign: "inherit" }}>
                {t("visit.mon")}: 10: 00-18: 00{" "}
              </font>
              <br />
              <font style={{ verticalAlign: "inherit" }}>
                {t("visit.tue")}: 10: 00-18: 00{" "}
              </font>
              <br />
              <font style={{ verticalAlign: "inherit" }}>
                {t("visit.wed")}: 10: 00-18: 00{" "}
              </font>
              <br />
              <font style={{ verticalAlign: "inherit" }}>
                {t("visit.thu")}: 10: 00-18: 00{" "}
              </font>
              <br />
              <font style={{ verticalAlign: "inherit" }}>
                {t("visit.fri")}: 10: 00-18: 00{" "}
              </font>
              <br />
              <font style={{ verticalAlign: "inherit" }}>
                {t("visit.sat")}: 10: 00-18: 00{" "}
              </font>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
