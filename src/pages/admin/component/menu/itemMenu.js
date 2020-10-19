import React from "react";
import { Link } from "react-router-dom";

const ItemMenuAdmin = (props) => {
  let { to, text, icon } = props.data;
  let id = props.id;
  return (
    <div className="link-iteam-menu" style={{ margin: "20px 0" }}>
      <Link to={to} className="link-iteam-menu" id={id}>
        <i className={`fa ${icon} d-inline `}></i>
        <label
          style={{
            textTransform: "capitalize",
            cursor: "pointer",
          }}
          htmlFor={id}
        >
          {" "}
          {text}
        </label>
      </Link>
    </div>
  );
};

export default ItemMenuAdmin;
