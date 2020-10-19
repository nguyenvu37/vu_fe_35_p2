import React from "react";

const ProductItem = (props) => {
  const { data, onDeleteItem, onEditItem } = props;
  let bgColor = "#b7457b";
  if (data.status === "inStock") {
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
          <span style={{ textTransform: "uppercase" }}>{data.id}</span>
          <span>{data.name}</span>
        </div>
      </td>
      <td style={{ color: "blue", fontSize: "14px" }}>{data.discount}</td>
      <td>
        <span className="price">
          {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          <small>đ</small>
        </span>
      </td>
      <td style={{ fontSize: "14px", textTransform: "uppercase" }}>
        {data.category}
      </td>
      <td style={{ fontSize: "14px", textTransform: "uppercase" }}>
        {data.species}
      </td>
      <td
        style={{
          fontSize: "14px",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{ backgroundColor: bgColor, color: "#fff", padding: "5px" }}
        >
          {data.status}
        </span>
      </td>
      <td>
        <i
          className="fas fa-edit"
          style={{ color: "blue", marginRight: "10px" }}
          onClick={() => onEditItem(data.id)}
        ></i>
        <i
          className="fas fa-trash-alt"
          style={{ color: "red" }}
          onClick={() => onDeleteItem(data.id)}
        ></i>
      </td>
    </tr>
  );
};

export default ProductItem;
