import React from "react";
import { getPrice, getTotal } from "../../common/calculation";

const OrderItem = (props) => {
  const { data } = props;
  return (
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
        onClick={() => props.history.push(`/detail/${data.id}`)}
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
      <td style={{ width: "90px" }}>{data.quantity}</td>
      <td style={{ width: "120px" }}>{data.status}</td>
      <td>
        <span className="price">
          {getTotal(data, data.quantity)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          <small>đ</small>
        </span>
      </td>
    </tr>
  );
};

export default OrderItem;
