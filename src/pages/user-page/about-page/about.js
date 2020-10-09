import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("translation");
  return (
    <main>
      <section>
        <div className="box">
          <div className="about">
            <div className="about__title title-content">
              <h1>{t("about.name")}</h1>
            </div>
            <div className="about__content">
              <div className="about__content__img">
                <img
                  src={require("../../../assets/img/about-us/img-about.jpg")}
                  alt=""
                />
              </div>
              <div className="about__content__text">
                <div className="about__content__text__logo logo">
                  <div className="about__content__text__logo--square logo-square"></div>
                  <img
                    className="logo-img"
                    src={require("../../../assets/img/home/mandala.png")}
                    alt=""
                  />
                </div>
                <div className="about__content__text__title">
                  <h3>{t("about.title")}</h3>
                  <p>{t("about.content")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
