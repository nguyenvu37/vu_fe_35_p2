import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("translation");
  const [en, setEn] = useState(true);
  const [vn, setVn] = useState(false);

  const handleChangeLanguage = (ln) => {
    i18n.changeLanguage(ln);
    setVn(!vn);
    setEn(!en);
  };

  let classEn = "",
    classVn = "";

  if (en) classEn = "active";

  if (vn) classVn = "active";

  return (
    <header>
      <div className="box">
        <div className="nav">
          <div className="nav__logo logo">
            <div className="nav__logo--square logo-square">
              <Link className="link" to="/">
                <img
                  className="logo-img"
                  src={require("../../assets/img/home/mandala.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="nav__menu">
            <ul>
              <li>
                <Link className="link" to="/">
                  {t("navigations.home")}
                </Link>
              </li>
              <li className="dropdown">
                <div className="arrow-up"></div>
                <Link className="link" to="/grid">
                  {t("navigations.products")}
                </Link>
                <div className="dropdown-list">
                  <ul>
                    <li>
                      <Link className="link" to="/list">
                        {t("dropdown.cosmetic")}
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/list">
                        {t("dropdown.perfume")}
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/list">
                        {t("dropdown.makeup")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("navigations.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__cart">
            <div className="nav__cart__item">
              <i className="fas fa-search search"></i>
              <Link className="link" to="/cart">
                <i className="fas fa-shopping-cart cart"></i>
              </Link>
            </div>
            <div className="access">
              <div className="btn-translate">
                <button
                  className={`${classEn}`}
                  onClick={() => handleChangeLanguage("en")}
                >
                  {t("lang.en")}
                </button>
                <button
                  className={`${classVn}`}
                  onClick={() => handleChangeLanguage("vn")}
                >
                  {t("lang.vn")}
                </button>
              </div>
              <div className="access-btn">
                <Link className="link" to="/login">
                  {t("navigations.login")}
                </Link>
                <div className="emty"></div>
                <Link className="link" to="/register">
                  {t("navigations.register")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
