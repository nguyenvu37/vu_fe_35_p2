import React from "react";

const OrderItem = (props) => {
  const { data, onDeleteItem } = props;
  let bgColor = "#b7457b";
  if (data.status === "paid") {
    bgColor = "green";
  }

  return (
    <tr>
      <td style={{ maxWidth: "200px", padding: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <img
            src={require(`../../../../assets/img/${data.img}`)}
            alt=""
            style={{ width: "20%", margin: "0 auto" }}
          />
          <span style={{ color: "#b7457b" }}>
            <label>ID: </label>
            {data.id}
          </span>
          <span>{data.name}</span>
        </div>
      </td>
      <td style={{ textTransform: "uppercase", fontSize: "14px" }}>
        {data.username}
      </td>
      <td style={{ color: "blue", fontSize: "14px" }}>{data.quantity}</td>
      <td
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{ color: "#fff", padding: "5px", backgroundColor: bgColor }}
        >
          {data.status}
        </span>
      </td>
      <td style={{ fontSize: "14px" }}>
        <span className="price">
          {data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          <small>đ</small>
        </span>
      </td>
      <td>
        <i
          className="fas fa-trash-alt"
          style={{ color: "red" }}
          onClick={() => onDeleteItem(data.id)}
        ></i>
      </td>
    </tr>
  );
};

export default OrderItem;
