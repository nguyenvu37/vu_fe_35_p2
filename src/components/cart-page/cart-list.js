import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import callApi from "../../common/callApi";
import CartItem from "./cart-item";
import { withRouter } from "react-router-dom";
import { actDelCart } from "../../actions/actions";

const CartList = (props) => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const numProduct = useSelector((state) => state.numCart.num);
  const actionDelProduct = useSelector((state) => state.delCart.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const inCart = JSON.parse(localStorage.getItem("inCart")) || [];
    if (localStorage.getItem("Token") !== null) {
      const fetchData = async () => {
        await callApi(
          `carts?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
          "get",
          null
        ).then((res) => {
          if (res && res.status === 200) {
            const carts = [...res.data];
            let summary = carts
              .map(
                (item) =>
                  parseInt(item.quantity) *
                  Math.floor(item.price * ((100 - item.discount) / 100))
              )
              .reduce((a, b) => a + b, 0);
            setData([...carts]);
            setSum(summary);
          }
        });
      };

      fetchData();
    } else {
      let summary = inCart
        .map(
          (item) =>
            parseInt(item.quantity) *
            Math.floor(item.price * ((100 - item.discount) / 100))
        )
        .reduce((a, b) => a + b, 0);
      setSum(summary);
      setData([...inCart]);
    }
  }, [numProduct, actionDelProduct]);

  const handleContinueShopping = () => {
    props.history.push("/");
  };

  const handleDelAll = async () => {
    if (window.confirm(t("del-all"))) {
      if (localStorage.getItem("Token") !== null) {
        await data.forEach(async (item) => {
          await callApi(`carts/${item.id}`, "delete", null).then((res) => {
            dispatch(actDelCart(item.id));
          });
        });
      } else {
        localStorage.removeItem("inCart");
        dispatch(actDelCart(1));
      }
    }
  };

  const handleInformationPage = () => {
    props.history.push("/information-customer");
  };

  return (
    <section className="cart" style={{ minHeight: "500px" }}>
      {data.length > 0 ? (
        <div className="box">
          <div className="cart__content">
            <div className="cart__content__title">
              <h1>{t("cart.title")}</h1>
            </div>
            <div className="cart__content__table">
              <table>
                <tbody>
                  <tr>
                    <th>{t("cart.th1")}</th>
                    <th>{t("cart.th2")}</th>
                    <th>{t("cart.th3")}</th>
                    <th>{t("cart.th4")}</th>
                    <th>{t("cart.th5")}</th>
                    <th>{t("cart.th6")}</th>
                  </tr>
                </tbody>
                {data.map((item, index) => {
                  return <CartItem key={index} data={item} />;
                })}
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
                onClick={handleContinueShopping}
              >
                {t("cart.btn-goon")}
              </button>
              <button className="delete" type="button" onClick={handleDelAll}>
                {t("cart.btn-del")}
              </button>
              <button
                className="payment"
                type="button"
                onClick={handleInformationPage}
              >
                {t("cart.btn-payment")}
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
          <h4>{t("nothing-cart")}</h4>
          <Link className="buy" to="/">
            {t("buy-now")}
          </Link>
        </div>
      )}
    </section>
  );
};

export default withRouter(CartList);
