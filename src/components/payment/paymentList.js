import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import callApi from "../../common/callApi";
import PaymentItem from "./paymentItem";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router-dom";
import { getSummary, getTotal } from "../../common/calculation";

const PaymentList = (props) => {
  const { t } = useTranslation("translation");
  const idCustomer = JSON.parse(localStorage.getItem("idCustomer")) || "";
  const [dataCustomer, setDataCustomer] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const fetchDataCustomer = async () => {
      if (localStorage.getItem("Token") !== null) {
        await callApi(`customers?id=${idCustomer}`, "get", null).then((res) => {
          if (res && res.status === 200 && res.data) {
            setDataCustomer([...res.data]);
          } else setDataCustomer([]);
        });
      } else {
        const customers = JSON.parse(localStorage.getItem("customers")) || {};
        setDataCustomer([customers]);
      }
    };

    const fetchDataProduct = async () => {
      if (localStorage.getItem("Token") !== null) {
        await callApi(
          `carts?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
          "get",
          null
        ).then((res) => {
          if (res && res.status === 200 && res.data) {
            const carts = [...res.data];
            const dataCarts = carts[0].data;
            const summary = getSummary(carts[0].data);

            setDataProduct([...dataCarts]);
            setSum(summary);
          } else {
            setDataProduct([]);
            setSum(0);
          }
        });
      } else {
        const inCart = JSON.parse(localStorage.getItem("inCart")) || [];
        const summary = getSummary(inCart);
        setDataProduct([...inCart]);
        setSum(summary);
      }
    };

    fetchDataCustomer();
    fetchDataProduct();
  }, [idCustomer]);

  const handleBackInformation = () => {
    props.history.push("/information-customer");
  };

  const handleCompletePayment = async () => {
    if (localStorage.getItem("Token") !== null) {
      const products = [];
      await dataProduct.forEach((item) => {
        let dataOrder = {
          ...item,
          total: getTotal(item, item.quantity),
        };
        products.push({ ...dataOrder });
      });
      let order = {
        id: uuidv4(),
        userId: dataCustomer[0].userId,
        fullname: dataCustomer[0].fullname,
        data: [...products],
      };
      localStorage.setItem("order", JSON.stringify({ ...order }));
    } else {
      const inCart = JSON.parse(localStorage.getItem("inCart")) || [];
      const products = [];
      await inCart.forEach((item) => {
        let dataOrder = {
          ...item,
          total: getTotal(item, item.quantity),
        };
        products.push({ ...dataOrder });
      });
      let order = {
        id: uuidv4(),
        userId: dataCustomer[0].id,
        fullname: dataCustomer[0].fullname,
        data: [...products],
      };
      localStorage.setItem("order", JSON.stringify({ ...order }));
    }

    props.history.push("/credit-card");
  };

  return (
    <section>
      <div className="payment-complete">
        {dataProduct.length > 0 && dataCustomer.length > 0 ? (
          <div className="box">
            <div className="payment-complete__content">
              <div className="payment-complete__content__title title-content">
                <h1>{t("payment.title")}</h1>
              </div>
              <div className="payment-complete__content__info">
                <div className="payment-complete__content__info__customer">
                  <h4>{t("payment.h4")}</h4>
                  <div className="customer-item">
                    <p className="customer-receiver">
                      {t("payment.label1")}:
                      <span>{dataCustomer[0].fullname}</span>
                    </p>
                  </div>
                  <div className="customer-item">
                    <p className="customer-address">
                      {t("payment.label2")}:
                      <span>{dataCustomer[0].address}</span>
                    </p>
                  </div>
                  <div className="customer-item">
                    <p className="customer-email">
                      {t("payment.label3")}:<span>{dataCustomer[0].email}</span>
                    </p>
                  </div>
                  <div className="customer-item">
                    <p className="customer-phone">
                      {t("payment.label4")}:<span>{dataCustomer[0].phone}</span>
                    </p>
                  </div>
                </div>
                <div className="payment-complete__content__info__product">
                  <table>
                    <tbody>
                      <tr>
                        <th>{t("payment.th1")}</th>
                        <th>{t("payment.th2")}</th>
                        <th>{t("payment.th3")}</th>
                        <th>{t("payment.th4")}</th>
                        <th>{t("payment.th5")}</th>
                      </tr>
                    </tbody>
                    <tbody>
                      {dataProduct.map((item, index) => {
                        return <PaymentItem key={index} data={item} />;
                      })}
                    </tbody>
                  </table>
                  <div className="payment-complete__content__info__product__total">
                    <h4>
                      {t("payment.sum")}:
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
                  <div className="payment-complete__content__info__product__btn">
                    <button
                      className="back-info"
                      type="button"
                      onClick={handleBackInformation}
                    >
                      <i className="fas fa-hand-point-left"></i>
                      {t("payment.btn-back")}
                    </button>
                    <button
                      className="checkout"
                      type="button"
                      onClick={handleCompletePayment}
                    >
                      {t("payment.btn-payment")}{" "}
                    </button>
                  </div>
                </div>
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
      </div>
    </section>
  );
};

export default withRouter(PaymentList);
