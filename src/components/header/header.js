import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../actions/actions";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { actLogout } from '../../actions/actions';

const Header = (props) => {
  const { t, i18n } = useTranslation("translation");
  const [en, setEn] = useState(true);
  const [vn, setVn] = useState(false);
  const dispatch = useDispatch();
  const dispatchToTalRow = useDispatch();
  const dispatchLogout = useDispatch();
  const loggedIn = useSelector((state) => state.users.loggedIn);

  const handleChangeLanguage = (ln) => {
    i18n.changeLanguage(ln);
    setVn(!vn);
    setEn(!en);
  };

  let classEn = "",
    classVn = "";

  if (en) classEn = "active";

  if (vn) classVn = "active";

  const handleLogout = () => {
    if (window.confirm(t('query-logout'))) {
      dispatchLogout(actLogout());
      props.history.push('/');
      NotificationManager.success('Success message', t('logout.success'));
    }
  };

  return (
    <header>
      <div className="box"></div>
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
                <Link
                  className="link"
                  to="/grid"
                  onClick={() => {
                    dispatch(actFetchProductRequest({ _limit: 6, _page: 1 }));
                    dispatchToTalRow(actFetchTotalRowsRequest({}));
                  }}
                >
                  {t("navigations.products")}
                </Link>
                <div className="dropdown-list">
                  <ul>
                    <li>
                      <Link
                        className="link"
                        to="/list"
                        onClick={() => {
                          dispatch(
                            actFetchProductRequest({
                              _limit: 6,
                              _page: 1,
                              species: "cosmetic",
                            })
                          );
                          dispatchToTalRow(
                            actFetchTotalRowsRequest({ species: "cosmetic" })
                          );
                        }}
                      >
                        {t("dropdown.cosmetic")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="link"
                        to="/list"
                        onClick={() => {
                          dispatch(
                            actFetchProductRequest({
                              _limit: 6,
                              _page: 1,
                              species: "perfume",
                            })
                          );
                          dispatchToTalRow(
                            actFetchTotalRowsRequest({ species: "perfume" })
                          );
                        }}
                      >
                        {t("dropdown.perfume")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="link"
                        to="/list"
                        onClick={() => {
                          dispatch(
                            actFetchProductRequest({
                              _limit: 6,
                              _page: 1,
                              species: "makeup",
                            })
                          );
                          dispatchToTalRow(
                            actFetchTotalRowsRequest({ species: "makeup" })
                          );
                        }}
                      >
                        {t("dropdown.makeup")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="link" to="/about">
                  {t("navigations.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__cart">
            <div className="nav__cart__item">
              <Link className="link cart-item" to="/cart">
                <i className="fas fa-shopping-cart cart"></i>
                <span>1</span>
              </Link>
              <div className="nav__cart__item__search">
                <input
                  className="input-search"
                  type="text"
                  name="search"
                  placeholder="Search.."
                />
                <i className="fas fa-search search"></i>
              </div>
              <div className="access">
                <div className="access-btn">
                  {loggedIn || localStorage.getItem("Token") !== null ? (
                    <div className="dropdown login" style={{ zIndex: 1000, position: 'relative', width: '150px', textAlign: 'center' }}>
                      <Link to="/">
                        <i
                          className="far fa-user"
                          style={{
                            fontSize: "20px",
                            margin: "0 10px",
                          }}
                        ></i> {' '} | {' '}
                        {`${(JSON.parse(localStorage.getItem("Token")).lastName).substring(0,6)}`} 
                      </Link>
                      <div className="dropdown-user">
                        <Link to="/editInformation" className="dropdown-item">
                          <i className="fas fa-cog"></i>
                          {t('edit-profile')}
                        </Link>
                        <Link to="/history-booking" className="dropdown-item">
                          <i className="fas fa-list-alt"></i>
                          {t('history')}
                        </Link>
                        <span
                          className="dropdown-item"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <i className="fas fa-user"></i>
                          {`${JSON.parse(localStorage.getItem("Token")).firstName} ${JSON.parse(localStorage.getItem("Token")).lastName}`}
                        </span>
                        <button
                          onClick={handleLogout}
                          className="dropdown-item"
                          href="#LogOut"
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          {t("logout.title")}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <Link className="link" to="/login">
                        {t("navigations.login")}
                      </Link>
                      <div className="emty"></div>
                      <Link className="link" to="/register">
                        {t("navigations.register")}
                      </Link>
                    </div>
                  )}
                  <div className="btn-translate">
                    <button
                      className={`${classEn}`}
                      onClick={() => handleChangeLanguage("en")}
                    >
                      En
                    </button>
                    <button
                      className={`${classVn}`}
                      onClick={() => handleChangeLanguage("vn")}
                    >
                      Vn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
