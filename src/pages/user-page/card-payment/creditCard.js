import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import { useTranslation } from "react-i18next";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { Link } from "react-router-dom";
import callApi from "../../../common/callApi";
import { withRouter } from "react-router-dom";

const CreditCard = (props) => {
  const { t } = useTranslation("translation");
  const [cvc, setCvc] = useState("1234");
  const [expiry, setExpiry] = useState("04/28");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("NGUYEN ANH VU");
  const [number, setNumber] = useState("4231412342345234");
  const order = JSON.parse(localStorage.getItem("order")) || {};
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("order") !== null) {
      const fetchData = async () => {
        await callApi(`order`, "get", null).then((res) => {
          if (res && res.status === 200 && res.data) {
            setData([...res.data]);
          } else setData([]);
        });
      };

      fetchData();
    }
  }, []);

  const handlePay = async (e) => {
    e.preventDefault();

    if (localStorage.getItem("Token") !== null) {
      if (data.length > 0) {
        const arrOrder = data.filter((item) => item.userId === order.userId);
        const newOrder = order.data;

        if (arrOrder.length > 0) {
          await newOrder.forEach((item) => {
            let index = arrOrder[0].data.findIndex(
              (itemOrder) => itemOrder.code === item.code
            );

            if (index !== -1) {
              arrOrder[0].data[index] = {
                ...arrOrder[0].data[index],
                quantity: arrOrder[0].data[index].quantity + item.quantity,
              };
            } else {
              let dataOrder = {
                ...item,
                status: "paid",
              };

              arrOrder[0].data.unshift({ ...dataOrder });
            }
          });
          callApi(`order/${arrOrder[0].id}`, "put", { ...arrOrder[0] }).then(
            () => {
              callApi(
                `carts/${JSON.parse(localStorage.getItem("Token")).id}`,
                "delete",
                null
              ).then((res) => {
                localStorage.removeItem("idCustomer");
                localStorage.removeItem("order");
                NotificationManager.success(
                  "Success message",
                  t("pay-success.title")
                );
                props.history.push("/");
              });
            }
          );
        } else {
          const products = [];
          await order.data.forEach((item) => {
            let newOrder = {
              ...item,
              status: "paid",
            };
            products.push({ ...newOrder });
          });

          let dataOrder = {
            ...order,
            data: [...products],
          };

          callApi(`order`, "post", { ...dataOrder }).then((res) => {
            callApi(
              `carts/${JSON.parse(localStorage.getItem("Token")).id}`,
              "delete",
              null
            ).then((res) => {
              localStorage.removeItem("idCustomer");
              localStorage.removeItem("order");
              NotificationManager.success(
                "Success message",
                t("pay-success.title")
              );
              props.history.push("/");
            });
          });
        }
      } else {
        const products = [];
        await order.data.forEach((item) => {
          let newOrder = {
            ...item,
            status: "paid",
          };
          products.push({ ...newOrder });
        });

        let dataOrder = {
          ...order,
          data: [...products],
        };

        callApi(`order`, "post", { ...dataOrder }).then((res) => {
          callApi(
            `carts/${JSON.parse(localStorage.getItem("Token")).id}`,
            "delete",
            null
          ).then((res) => {
            localStorage.removeItem("idCustomer");
            localStorage.removeItem("order");
            NotificationManager.success(
              "Success message",
              t("pay-success.title")
            );
            props.history.push("/");
          });
        });
      }
    } else {
      if (data.length > 0) {
        const arrOrder = data.filter((item) => item.userId === order.userId);
        const newOrder = order.data;

        if (arrOrder.length > 0) {
          await newOrder.forEach((item) => {
            let index = arrOrder[0].data.findIndex(
              (itemOrder) => itemOrder.code === item.code
            );

            if (index !== -1) {
              arrOrder[0].data[index] = {
                ...arrOrder[0].data[index],
                quantity: arrOrder[0].data[index].quantity + item.quantity,
              };
            } else {
              let dataOrder = {
                ...item,
                status: "paid",
              };

              arrOrder[0].data.unshift({ ...dataOrder });
            }
          });
          callApi(`order/${arrOrder[0].id}`, "put", { ...arrOrder[0] }).then(
            (res) => {
              localStorage.clear();
              NotificationManager.success(
                "Success message",
                t("pay-success.title")
              );
              props.history.push("/");
            }
          );
        } else {
          const products = [];
          await order.data.forEach((item) => {
            let newOrder = {
              ...item,
              status: "paid",
            };
            products.push({ ...newOrder });
          });

          let dataOrder = {
            ...order,
            data: [...products],
          };

          callApi(`order`, "post", { ...dataOrder }).then((res) => {
            localStorage.clear();
            NotificationManager.success(
              "Success message",
              t("pay-success.title")
            );
            props.history.push("/");
          });
        }
      } else {
        const products = [];
        await order.data.forEach((item) => {
          let newOrder = {
            ...item,
            status: "paid",
          };
          products.push({ ...newOrder });
        });

        let dataOrder = {
          ...order,
          data: [...products],
        };

        callApi(`order`, "post", { ...dataOrder }).then((res) => {
          localStorage.clear();
          NotificationManager.success(
            "Success message",
            t("pay-success.title")
          );
          props.history.push("/");
        });
      }
    }
  };

  return (
    <main>
      {localStorage.getItem("order") !== null ? (
        <div
          className="box"
          style={{
            margin: "50px auto",
            display: "flex",
            alignItems: "center",
            width: "50%",
            height: "470px",
          }}
        >
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
          <form className="card-credit" onSubmit={(e) => handlePay(e)}>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <button className="myButton">Pay</button>
          </form>
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
          <h4>{t("nothing-info")}</h4>
          <Link className="buy" to="/cart">
            {t("cart-now")}
          </Link>
        </div>
      )}
    </main>
  );
};

export default withRouter(CreditCard);
