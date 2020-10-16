import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getQuantity, getSummary } from "../../../common/calculation";
import callApi from "../../../common/callApi";
import ProfileItem from "./profileItem";
import { withRouter } from "react-router-dom";

const Profile = (props) => {
  const { t } = useTranslation("translation");
  const [dataCart, setDataCart] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [data, setData] = useState([]);
  const profile = JSON.parse(localStorage.getItem("Token")) || {};

  useEffect(() => {
    const fetchDataCart = async () => {
      await callApi(
        `carts?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
        "get",
        null
      ).then((res) => {
        if (res && res.status === 200 && res.data) {
          const carts = [...res.data][0].data;
          setDataCart([...carts]);
        } else setDataCart([]);
      });
    };

    const fetchDataOrder = async () => {
      await callApi(
        `order?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
        "get",
        null
      ).then((res) => {
        if (res && res.status === 200 && res.data) {
          const orders = [...res.data][0].data;
          setDataOrder([...orders]);
        } else setDataOrder([]);
      });
    };

    fetchDataCart();
    fetchDataOrder();
  }, []);

  useEffect(() => {
    const quanCart = dataCart.length > 0 ? getQuantity(dataCart) : 0;
    const quanOrder = dataOrder.length > 0 ? getQuantity(dataOrder) : 0;
    const summary = dataOrder.length > 0 ? getSummary(dataOrder) : 0;
    let dataProfile = {
      totalProduct: quanCart + quanOrder,
      paid: quanOrder,
      unpaid: quanCart,
      sum: summary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    };
    setData({ ...dataProfile });
  }, [dataCart, dataOrder]);

  return (
    <main>
      <section>
        <div className="box">
          <div className="profile">
            <aside>
              <div className="profile__info">
                <h4>{t("profile.h4")}</h4>
                <div className="profile__info__avata">
                  <img src={require("../../../assets/img/avata.png")} alt="" />
                </div>
                <div className="profile__info__content">
                  <div className="profile-group">
                    <span>{t("profile.name")}:</span>
                    <p style={{ textTransform: "uppercase" }}>
                      {profile.firstName + " " + profile.lastName}
                    </p>
                  </div>
                  <div className="profile-group">
                    <span>{t("profile.email")}:</span>
                    <p>{profile.email}</p>
                  </div>
                  <div className="profile-group">
                    <span>{t("profile.phone")}:</span>
                    <p>{profile.phone}</p>
                  </div>
                </div>
              </div>
            </aside>
            <article>
              <div className="profile__table cart__content__table">
                <table>
                  <tbody>
                    <tr>
                      <th style={{ width: "150px" }}>{t("profile.th1")}</th>
                      <th>{t("profile.th2")}</th>
                      <th>{t("profile.th3")}</th>
                      <th style={{ width: "150px" }}>{t("profile.th4")}</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <ProfileItem data={data} />
                  </tbody>
                </table>
                <div className="profile__table__btn cart__content__btn">
                  <button
                    onClick={() => props.history.push("/editinformation")}
                  >
                    {t("profile.btn-edit")}
                  </button>
                  <button onClick={() => props.history.push("/history-order")}>
                    {t("profile.btn-order")}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default withRouter(Profile);
