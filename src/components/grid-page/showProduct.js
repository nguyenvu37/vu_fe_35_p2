import React from "react";
import AddToCart from "../../common/addToCart";
import callApi from "../../common/callApi";
import Waiting from "../../common/waiting";
import { Link, withRouter } from "react-router-dom";
import Pagination from "../../common/pagination";
import { useSelector } from "react-redux";

const ShowProduct = (props) => {
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
      <div className="grid__content">
        <div className="grid__content__pagination">
          <div className="pagination">
            <div className="pagination__list" style={{ flex: 1 }}>
              <Link className="link" to="/grid">
                <i className="fas fa-th-large"></i>
              </Link>
              <Link className="link" to="/list">
                <i className="fas fa-list"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid__content__product">
          {data.map((item, index) => {
            return (
              <div
                className="grid__content__product__item grid-product1"
                key={index + 1}
                style={{ position: "relative" }}
              >
                <img src={require(`../../assets/img/${item.img}`)} alt="" />
                <div className="grid__content__product__item__info detail-content">
                  <h4>{item.manufacturer}</h4>
                  <button
                    onClick={() => handleCallDetailPage(item.id)}
                    style={{
                      border: "0",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                      outline: "none",
                      height: "70px",
                      padding: "0 5px",
                      width: "100%",
                    }}
                  >
                    {item.name}
                  </button>
                  <span className="price">
                    {Math.floor(item.price * ((100 - item.discount) / 100))
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <small>đ</small>
                  </span>
                  <span
                    className="price old"
                    style={{ textDecoration: "line-through" }}
                  >
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <small>đ</small>
                  </span>
                </div>
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
                  {item.discount}%
                </div>
                <div className="grid__content__product__item__icon">
                  <AddToCart />
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid__content__pagination">
          <div className="pagination">
            <div className="pagination__list" style={{ flex: 1 }}>
              <Link className="link" to="/grid">
                <i className="fas fa-th-large"></i>
              </Link>
              <Link className="link" to="/list">
                <i className="fas fa-list"></i>
              </Link>
            </div>
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

export default withRouter(ShowProduct);
