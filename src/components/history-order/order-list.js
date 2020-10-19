import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getSummary } from "../../common/calculation";
import callApi from "../../common/callApi";
import OrderItem from "./order-item";
import { withRouter } from "react-router-dom";

const OrderList = (props) => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await callApi(
        `order?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
        "get",
        null
      ).then((res) => {
        if (res && res.status === 200 && res.data) {
          if (res.data[0] !== undefined) {
            const dataProducts = [...res.data][0].data;
            let summary = getSummary(dataProducts);
            setData([...dataProducts]);
            setSum(summary);
          } else {
            setData([]);
            setSum(0);
          }
        } else {
          setData([]);
          setSum(0);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <section className="cart" style={{ minHeight: "500px" }}>
      {data.length > 0 ? (
        <div className="box">
          <div className="cart__content">
            <div className="cart__content__title">
              <h1>{t("order.title")}</h1>
            </div>
            <div className="cart__content__table">
              <table>
                <tbody>
                  <tr>
                    <th>{t("cart.th1")}</th>
                    <th>{t("cart.th2")}</th>
                    <th>{t("cart.th3")}</th>
                    <th>{t("cart.th4")}</th>
                    <th>{t("cart.th7")}</th>
                    <th>{t("cart.th5")}</th>
                  </tr>
                </tbody>
                <tbody>
                  {data.map((item, index) => {
                    return <OrderItem key={index} data={item} />;
                  })}
                </tbody>
              </table>
            </div>
            <div className="cart__content__total" style={{ marginTop: "20px" }}>
              <h4>
                {t("cart.h4")}:{" "}
                <span
                  className="price"
                  style={{ fontSize: "22px", marginLeft: "10px" }}
                >
                  {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  <small>đ</small>
                </span>
              </h4>
              <span className="price"></span>
            </div>
            <div className="cart__content__btn">
              <button
                className="buying"
                type="button"
                onClick={() => props.history.push("/")}
              >
                {t("cart.btn-goon")}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="box"
          style={{
            height: "500px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>{t("nothing-order")}</h4>
          <Link className="buy" to="/">
            {t("buy-now")}
          </Link>
        </div>
      )}
    </section>
  );
};

export default withRouter(OrderList);
