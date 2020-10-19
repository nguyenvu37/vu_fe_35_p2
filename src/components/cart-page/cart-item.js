import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { actAddCart, actDelCart, actNumCart } from "../../actions/actions";
import { withRouter } from "react-router-dom";
import { getPrice, getTotal } from "../../common/calculation";

const CartItem = (props) => {
  const { t } = useTranslation("translation");
  const { data, onChangeQuantity, onDeleteElement } = props;
  const inputQuan = useRef();
  const [total, setTotal] = useState(0);
  const inCart = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  useEffect(() => {
    inputQuan.current.value = parseInt(data.quantity);
    setTotal(getTotal(data, data.quantity));
  }, [data]);

  const handleChageQuantity = async (id) => {
    if (inputQuan.current.value > 0) {
      let totalPrice = getTotal(data, inputQuan.current.value);
      if (localStorage.getItem("Token") !== null) {
        let dataProduct = {
          ...data,
          quantity: parseInt(inputQuan.current.value),
        };

        onChangeQuantity({ ...dataProduct });
      } else {
        let index = inCart.findIndex((item) => item.id === id);
        inCart[index] = {
          ...inCart[index],
          quantity: parseInt(inputQuan.current.value),
        };
        dispatch(actAddCart([...inCart]));
        dispatch(actNumCart(inputQuan.current.value));
      }
      setTotal(totalPrice);
    } else {
      let totalPrice = getTotal(data, 1);
      inputQuan.current.value = 1;
      if (localStorage.getItem("Token") !== null) {
        let dataProduct = {
          ...data,
          quantity: parseInt(inputQuan.current.value),
        };
        onChangeQuantity({ ...dataProduct });
      } else {
        let index = inCart.findIndex((item) => item.id === id);
        inCart[index] = {
          ...inCart[index],
          quantity: parseInt(inputQuan.current.value),
        };
        dispatch(actAddCart([...inCart]));
        dispatch(actNumCart(inputQuan.current.value));
      }
      setTotal(totalPrice);
    }
  };

  const handleDelete = async (id) => {
    if (localStorage.getItem("Token") !== null) {
      if (window.confirm(t("want-del"))) {
        onDeleteElement(id);
      }
    } else {
      if (window.confirm(t("want-del"))) {
        let dataCart = inCart.filter((item) => item.id !== id);
        dispatch(actAddCart([...dataCart]));
        dispatch(actDelCart(id));
      }
    }
  };

  const handleDetailPage = (id) => {
    props.history.push(`/detail/${id}`);
  };

  return (
    <tbody>
      <tr>
        <td style={{ textTransform: "uppercase" }}>
          <img
            src={require(`../../assets/img/${data.img}`)}
            alt=""
            style={{ width: "60px" }}
          />
          <h4>{data.code}</h4>
        </td>
        <td
          style={{ width: "200px", padding: "0 5px", cursor: "pointer" }}
          onClick={() => handleDetailPage(data.code)}
        >
          {data.name}
        </td>
        <td style={{ minWidtd: "65px" }}>
          <span className="price">
            {getPrice(data)
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

export default withRouter(CartItem);
