import React, { useEffect, useState } from "react";
import AddToCart from "../../common/addToCart";

const DetailProduct = (props) => {
  const { data } = props;
  const [img, setImg] = useState(data[0].img);

  useEffect(() => {
    if (data.length !== 0) setImg(data[0].img);

    return function cleanup() {
      setImg("");
    };
  }, [data]);

  const handleChangeImg = (item) => {
    setImg(item);
  };
  return (
    <section>
      <div className="box">
        <div className="detail">
          <div className="detail__img-involve">
            {data.length !== 0
              ? data[0].imgDetail.map((item, index) => {
                  return (
                    <img
                      key={index + 1}
                      src={require(`../../assets/img/${item}`)}
                      alt=""
                      onClick={() => handleChangeImg(item)}
                    />
                  );
                })
              : ""}
          </div>
          <div
            className="detail__img-bg"
            style={{
              position: "relative",
              border: "1px solid gray",
              boxShadow: "0px 4px 5px -4px rgba(0, 0, 0, 0.75)",
              width: "510px",
              height: "550px",
            }}
          >
            <img
              src={require(`../../assets/img/${img}`)}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <div
              className="discount-item"
              style={{
                position: "absolute",
                top: "5px",
                right: "0",
                fontFamily: "Timenewroman",
                fontSize: "13px",
                fontWeight: "700",
                background: "red",
                padding: "5px 20px",
                color: "#fff",
                boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.75)",
              }}
            >
              {data[0].discount}%
            </div>
          </div>
          <div className="detail__info">
            <h3>{data[0].name}</h3>
            <div className="detail__info__price detail-price">
              <span>
                {Math.floor(data[0].price * ((100 - data[0].discount) / 100))
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                đ
              </span>
              <small style={{ textDecoration: "line-through" }}>
                {data[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                đ
              </small>
            </div>
            <p style={{ marginBottom: "20px" }}>{data[0].info}</p>
            {/* <form id="formDataProduct"> */}
            <div className="detail__info__quantity item-input">
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                số lượng
              </label>
              <input type="number" style={{ margin: "10px 0" }} />
            </div>
            <div style={{ float: "left" }}>
              <AddToCart rate={data[0].rating} data={data[0]} />
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
