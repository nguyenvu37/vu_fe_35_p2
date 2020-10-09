import React from "react";
import { useSelector } from "react-redux";
import AddToCart from "../../common/addToCart";
import callApi from "../../common/callApi";
import Pagination from "../../common/pagination";
import Waiting from "../../common/waiting";
import { withRouter } from "react-router-dom";
import BtnGridList from "../../common/list-grid";

const ShowProductList = (props) => {
  const { data } = props;
  const totalRows = useSelector((state) => state.totalRow);

  const handleCallDetailPage = (id) => {
    const fetData = async () => {
      const index = data.findIndex((item) => item.id === id);
      await callApi(`products/${id}`, "put", {
        ...data[index],
        view: data[index].view + 1,
      });
    };
    fetData();

    props.history.push(`/detail/${id}`);
  };
  return data.length !== 0 ? (
    <article>
      <div className="list__content">
        <div className="list__content__pagination">
          <div className="pagination">
            <BtnGridList />
          </div>
        </div>
        <div className="list__content__product">
          {data.map((item, index) => {
            return (
              <div
                className="list__content__product__item list-product1"
                key={index + 1}
                style={{ position: "relative" }}
              >
                <img
                  src={require(`../../assets/img/${item.img}`)}
                  alt=""
                  style={{ width: "200px" }}
                />
                <div
                  className="discount-item"
                  style={{
                    position: "absolute",
                    top: "5px",
                    fontFamily: "Timenewroman",
                    fontSize: "13px",
                    fontWeight: "700",
                    background: "red",
                    padding: "5px 20px",
                    color: "#fff",
                    boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  {item.discount}%
                </div>
                <div className="list__content__product__item__info">
                  <button
                    onClick={() => handleCallDetailPage(item.id)}
                    style={{
                      border: "0",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                      outline: "none",
                      height: "70px",
                      padding: "0 5px",
                      fontSize: "20px",
                      textTransform: "uppercase",
                      textAlign: "left",
                    }}
                  >
                    {item.name}
                  </button>
                  <div className="list__content__product__item__info--appreciate">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <p>( 4 Lượt mua )</p>
                  </div>
                  <div className="list__content__product__item__text">
                    <p>{item.info}</p>
                  </div>
                  <div className="detail-price">
                    <span className="price">
                      {Math.floor(item.price * ((100 - item.discount) / 100))
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      đ
                    </span>
                    <span
                      className="price old"
                      style={{ textDecoration: "line-through" }}
                    >
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      đ
                    </span>
                  </div>
                  <div className="list__content__product__item__icon">
                    <AddToCart rate={item.rating} data={item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="list__content__pagination">
          <div className="pagination">
            <BtnGridList />
            <div
              className="pagination__num"
              style={{ flex: 3, display: "flex" }}
            >
              <Pagination totalRows={totalRows} />
            </div>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <article>
      <Waiting custom={{ position: "absolute", left: "50%", top: "200px" }} />
    </article>
  );
};

export default withRouter(ShowProductList);
