import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actDelCart, actNumCart } from "../../actions/actions";
import callApi from "../../common/callApi";

const CartItem = (props) => {
  const { t } = useTranslation("translation");
  const { data } = props;
  const inputQuan = useRef();
  const [total, setTotal] = useState(0);
  const inCart = JSON.parse(localStorage.getItem("inCart")) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    inputQuan.current.value = data.quantity;
    setTotal(
      Math.floor(data.price * ((100 - data.discount) / 100)) * data.quantity
    );
  }, [data]);

  const handleChageQuantity = async (id) => {
    if (inputQuan.current.value > 0) {
      let totalPrice =
        Math.floor(data.price * ((100 - data.discount) / 100)) *
        inputQuan.current.value;
      if (localStorage.getItem("Token") !== null) {
        let dataProduct = {
          ...data,
          quantity: parseInt(inputQuan.current.value),
        };
        await callApi(`carts/${id}`, "put", { ...dataProduct });
      } else {
        let index = inCart.findIndex((item) => item.id === id);
        inCart[index] = {
          ...inCart[index],
          quantity: parseInt(inputQuan.current.value),
        };
        localStorage.setItem("inCart", JSON.stringify([...inCart]));
      }
      setTotal(totalPrice);
    } else {
      let totalPrice =
        Math.floor(data.price * ((100 - data.discount) / 100)) * 1;
      inputQuan.current.value = 1;
      if (localStorage.getItem("Token") !== null) {
        let dataProduct = {
          ...data,
          quantity: parseInt(inputQuan.current.value),
        };
        await callApi(`carts/${id}`, "put", { ...dataProduct });
      } else {
        let index = inCart.findIndex((item) => item.id === id);
        inCart[index] = {
          ...inCart[index],
          quantity: parseInt(inputQuan.current.value),
        };
        localStorage.setItem("inCart", JSON.stringify([...inCart]));
      }
      setTotal(totalPrice);
    }
    dispatch(actNumCart(inputQuan.current.value));
  };

  const handleDelete = async (id) => {
    if (localStorage.getItem("Token") !== null) {
      if (window.confirm(t("want-del"))) {
        await callApi(`carts/${id}`, "delete", null).then((res) => {
          dispatch(actDelCart(id));
        });
      }
    } else {
      if (window.confirm(t("want-del"))) {
        let dataCart = inCart.filter((item) => item.id !== id);
        console.log("dataCart", dataCart);

        localStorage.setItem("inCart", JSON.stringify([...dataCart]));
        dispatch(actDelCart(id));
      }
    }
  };
  return (
    <tbody>
      <tr>
        <td style={{ textTransform: "uppercase" }}>{data.code}</td>
        <td style={{ width: "200px", padding: "0 5px" }}>{data.name}</td>
        <td style={{ minWidtd: "65px" }}>
          <span className="price">
            {Math.floor(data.price * ((100 - data.discount) / 100))
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            <small>đ</small>
          </span>
        </td>
        <td style={{ width: "90px" }}>
          <input
            type="number"
            id={data.id}
            ref={inputQuan}
            style={{ width: "50px", padding: "2px" }}
            onChange={() => handleChageQuantity(data.id)}
          />
        </td>
        <td style={{ width: "120px" }}>
          <span className="price">
            {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            <small>đ</small>
          </span>
        </td>
        <td>
          <i
            className="fas fa-trash-alt"
            onClick={() => handleDelete(data.id)}
            style={{ cursor: "pointer" }}
          ></i>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
