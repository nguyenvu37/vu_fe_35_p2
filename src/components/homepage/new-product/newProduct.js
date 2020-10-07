import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { actFetchDataNewRequest } from "../../../actions/actions";
import AddToCart from "../../../common/addToCart";

const NewProducts = (props) => {
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();
  const { dataNewProducts } = props;

  useEffect(() => {
    dispatch(
      actFetchDataNewRequest({
        new: "new",
      })
    );
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="product">
      <div className="product__title">
        <div className="product__title__name">{t("newProduct.title")}</div>
      </div>
      <div className="product__items">
        <Slider {...settings}>
          {dataNewProducts &&
            dataNewProducts.map((item, index) => {
              return (
                <div
                  className="product__items__detail"
                  key={index + 1}
                  style={{ position: "relative" }}
                >
                  <img
                    src={require(`../../../assets/img/${item.img}`)}
                    alt=""
                  />
                  <div className="product__items__detail__content detail-content">
                    <h4 style={{ textTransform: "uppercase" }}>
                      {item.manufacturer}
                    </h4>
                    <a href="detail.html">
                      <p>{item.name}</p>
                    </a>
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
                  <div className="product__items__detail__icon">
                    <AddToCart />
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      <div className="product__view-all">
        <button>{t("newProduct.viewAll")}</button>
      </div>
    </div>
  );
};

export default NewProducts;
