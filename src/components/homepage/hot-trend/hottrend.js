import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { actFetchDataHotTrendRequest } from "../../../actions/actions";
import { withRouter } from "react-router-dom";
import AddToCart from "../../../common/addToCart";
import callApi from "../../../common/callApi";

const Hottrend = (props) => {
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();
  const { dataHot } = props;

  useEffect(() => {
    dispatch(
      actFetchDataHotTrendRequest({
        hot: "hot",
      })
    );
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const handleCallDetailPage = (id) => {
    const fetData = async () => {
      const index = dataHot.findIndex((item) => item.id === id);
      await callApi(`products/${id}`, "put", {
        ...dataHot[index],
        view: dataHot[index].view + 1,
      });
    };
    fetData();

    props.history.push(`/detail/${id}`);
  };

  return (
    <div className="hot-trend">
      <div className="product">
        <div className="product__title">
          <div className="product__title__name">{t("hotTrend.title")}</div>
        </div>
        <div className="product__items">
          <Slider {...settings}>
            {dataHot.map((item, index) => {
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
                  <div className="product__items__detail__icon">
                    <AddToCart />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="product__view-all">
          <button>{t("hotTrend.viewAll")}</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Hottrend);
