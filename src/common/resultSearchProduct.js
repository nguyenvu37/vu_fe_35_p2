import React from "react";
import { useHistory } from "react-router-dom";

const ResultSearchProduct = (props) => {
  const { data } = props;
  const history = useHistory();

  return (
    <div
      style={{
        position: "absolute",
        top: "40px",
        left: "0",
        width: "200px",
        height: "300px",
        zIndex: "1000",
        backgroundColor: "#fff",
        padding: "10px",
        overflowY: "scroll",
        boxShadow: "3px 10px 40px -15px rgba(0,0,0,0.76)",
      }}
    >
      {data.map((item, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            margin: "5px 0",
            padding: "5px",
            borderBottom: "1px dotted gray",
          }}
          key={index + 1}
        >
          <img
            src={require(`../assets/img/${item.img}`)}
            alt=""
            style={{ width: "20%", marginRight: "5px" }}
          />
          <span
            style={{ fontSize: "12px", cursor: "pointer" }}
            onClick={() => history.push(`/detail/${item.id}`)}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResultSearchProduct;
