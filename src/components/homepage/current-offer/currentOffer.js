import React from "react";
import { useTranslation } from "react-i18next";
import off1 from "../../../assets/img/home/off.jpg";
import off2 from "../../../assets/img/home/off50.jpg";
import off3 from "../../../assets/img/home/off10.jpg";

const CurrentOffers = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="offers">
      <div className="offers__title">{t("offers.title")}</div>
      <div className="offers__content">
        <div
          className="offers__content__item"
          style={{ background: `url(${off1})  no-repeat center center` }}
        >
          <h2>{t("offers.discount1")}</h2>
          <p>{t("offers.content1")}</p>
        </div>

        <div
          className="offers__content__item"
          style={{ background: `url(${off2})  no-repeat center center` }}
        >
          <h2>{t("offers.discount2")}</h2>
          <p>{t("offers.content2")}</p>
        </div>

        <div
          className="offers__content__item"
          style={{ background: `url(${off3})  no-repeat center center` }}
        >
          <h2>{t("offers.discount3")}</h2>
          <p>{t("offers.content3")}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentOffers;
