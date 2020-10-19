import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { actFetchDataNewRequest } from "../../../actions/actions";
import AddToCart from "../../../common/addToCart";
import callApi from "../../../common/callApi";
import { withRouter } from "react-router-dom";
import Waiting from "../../../common/waiting";
import ViewAll from "../../../common/viewAll";
import { getPrice } from "../../../common/calculation";

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
    autoplay: true,
    autoplaySpeed: 2000,
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

  const handleCallDetail = (id) => {
    const fetData = async () => {
      const index = dataNewProducts.findIndex((item) => item.id === id);
      await callApi(`products/${id}`, "put", {
        ...dataNewProducts[index],
        view: dataNewProducts[index].view + 1,
      });
    };
    fetData();
    props.history.push(`/detail/${id}`);
  };

  return dataNewProducts.length !== 0 ? (
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
                    <button
                      onClick={() => handleCallDetail(item.id)}
                      style={{
                        border: "0",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        fontSize: "14px",
                        outline: "none",
                        padding: "0 5px",
                        height: "70px",
                      }}
                    >
                      {item.name}
                    </button>
                    <span className="price">
                      {getPrice(item)
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
                    <AddToCart rate={item.rating} data={item} />
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      <ViewAll filter={"new"} />
    </div>
  ) : (
    <div className="product" style={{ width: "100%" }}>
      <div className="product__title">
        <div className="product__title__name">{t("newProduct.title")}</div>
      </div>
      <Waiting custom={{ position: "absolute", left: "50%" }} />
    </div>
  );
};

export default withRouter(NewProducts);
