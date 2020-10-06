import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("translation");
  return (
    <footer>
      <div className="box">
        <div className="footer__content">
          <div className="footer__content__contact">
            <h3>{t("footer.title")}</h3>
            <div className="footer__content__contact__add">
              <i className="fas fa-map-marker-alt"></i>
              <p>{t("footer.location")}</p>
            </div>
            <div className="footer__content__contact__phone">
              <div className="footer__content__contact__phone__item1">
                <i className="fas fa-phone-alt"></i>
                <p>(04) 6674 2332 - </p>
              </div>
              <div className="footer__content__contact__phone__item2">
                <img src={require("../../assets/img/home/fax.png")} alt="" />
                <p>(04) 3786 8904</p>
              </div>
            </div>
            <div className="footer__content__contact__mail">
              <div className="footer__content__contact__mail__item1">
                <i className="fas fa-phone-alt"></i>
                <p>(08) 6680 9686</p>
              </div>
              <div className="footer__content__contact__mail__item2">
                <i className="fas fa-envelope"></i>
                <p className="email">Support@bizweb.vn</p>
              </div>
            </div>
          </div>
          <div className="footer__content__shipping">
            <h3>{t("footer.title1")}</h3>
            <ul>
              <li>
                <Link className="link" to="/">
                  {t("footer.onlineShopping")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.weShip")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.shippingPolicy")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.shippingInfo")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content__support">
            <h3>{t("footer.title2")}</h3>
            <ul>
              <li>
                <Link className="link" to="/">
                  {t("footer.ourStory")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.safePayment")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.shippingOption")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.shippingPolicy")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content__info">
            <h3>{t("footer.title3")}</h3>
            <ul>
              <li>
                <Link className="link" to="/">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.termCondition")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.orderReturn")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content__acc">
            <h3>{t("footer.title4")}</h3>
            <ul>
              <li>
                <Link className="link" to="/">
                  {t("footer.viewCart")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.favoriteProduct")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.checking")}
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  {t("footer.trackOrder")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__border"></div>
      <div className="box">
        <div className="footer__copyright">
          <p> &copy; Copyright 2008-2014 DKT Technology JSC</p>
          <img src={require("../../assets/img/home/payment.png")} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
