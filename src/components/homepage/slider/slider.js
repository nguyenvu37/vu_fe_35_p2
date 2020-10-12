import React from "react";

import Slider from "react-animated-slider";
import background from "../../../assets/img/home/background.jpg";
import background2 from "../../../assets/img/home/background2.jpg";
import background3 from "../../../assets/img/home/background3.jpeg";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../../actions/actions";
import { withRouter } from "react-router-dom";

const Sliders = (props) => {
  const { t } = useTranslation("translation");
  const dipatchProduct = useDispatch();
  const dispatchTotalRow = useDispatch();

  const content = [
    {
      title: t("banner.titleBanner1"),
      button: t("banner.shopNow"),
      image: background,
      color: "#789629",
      ml: "150px",
      manufacturer: "green",
    },
    {
      title: t("banner.titleBanner2"),
      button: t("shopNow"),
      image: background2,
      color: "#fff",
      left: "15%",
      top: "-15%",
      manufacturer: "enesti",
    },
    {
      title: t("banner.titleBanner3"),
      button: t("banner.shopNow"),
      image: background3,
      color: "#be0c21",
      left: "27%",
      top: "-30%",
      manufacturer: "laneige",
    },
  ];

  const handleCallListPage = (filter) => {
    dipatchProduct(
      actFetchProductRequest({
        _limit: 6,
        _page: 1,
        manufacturer: filter,
      })
    );

    dispatchTotalRow(
      actFetchTotalRowsRequest({
        manufacturer: filter,
      })
    );
    props.history.push("/list");
  };
  return (
    <Slider autoplay={4000}>
      {content.map((item, index) => (
        <div
          key={index}
          style={{
            background: `url(${item.image}) no-repeat center center`,
          }}
        >
          <div className="box">
            <div
              className="center"
              style={{
                marginLeft: `${item.left}`,
                marginTop: `${item.top}`,
              }}
            >
              <h1 style={{ color: `${item.color}` }}>{item.title}</h1>
              <button
                style={{ marginLeft: `${item.ml}` }}
                onClick={() => handleCallListPage(item.manufacturer)}
              >
                {item.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default withRouter(Sliders);
