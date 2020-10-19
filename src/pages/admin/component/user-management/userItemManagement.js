import React from "react";

const ItemUserMangement = (props) => {
  const { data, onDeleteItem } = props;
  return (
    <tr>
      <td style={{ maxWidth: "200px", padding: "10px" }}>
        <div
          style={{
            background: "rgb(136, 216, 218)",
            padding: "10px",
            color: "#fff",
          }}
        >
          {data.id}
        </div>
      </td>
      <td>{data.email}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.phone}</td>
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

export default ItemUserMangement;
