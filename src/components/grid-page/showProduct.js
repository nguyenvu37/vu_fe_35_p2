import React, { useRef } from "react";
import AddToCart from "../../common/addToCart";
import callApi from "../../common/callApi";
import Waiting from "../../common/waiting";
import { withRouter } from "react-router-dom";
import Pagination from "../../common/pagination";
import { useDispatch, useSelector } from "react-redux";
import { actFetchProductRequest } from "../../actions/actions";
import BtnGridList from "../../common/list-grid";

const ShowProduct = (props) => {
  const { data } = props;
  const totalRows = useSelector((state) => state.totalRow);
  const filters = useSelector((state) => state.filters.filters);
  const optionRef = useRef("");
  const dispatchProduct = useDispatch();

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

  const handleSelect = () => {
    let option = "";
    let sort = "";
    switch (optionRef.current.value) {
      case "price asc":
        option = "asc";
        break;
      case "price desc":
        option = "desc";
        break;
      default:
        option = "";
    }
    if (option !== "") {
      sort = "price";
    } else sort = "";

    dispatchProduct(
      actFetchProductRequest({ ...filters, _sort: sort, _order: option })
    );
  };

  return data.length !== 0 ? (
    <article>
      <div className="grid__content">
        <div className="grid__content__pagination">
          <div className="pagination">
            <BtnGridList />
            <div className="results__topbar__sort">
              <div className="results__topbar__sort__selector">
                <select
                  className="sort__by__selector"
                  ref={optionRef}
                  onChange={() => handleSelect()}
                >
                  <option value="featured">Featured</option>
                  <option value="price asc">Price asc.</option>
                  <option value="price desc">Price desc.</option>
                </select>
              </div>
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
                  <AddToCart rate={item.rating} data={item} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid__content__pagination">
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

export default withRouter(ShowProduct);
