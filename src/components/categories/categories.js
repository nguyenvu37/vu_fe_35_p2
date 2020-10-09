import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../actions/actions";
import FilterPrice from "./filterPrice";
import Rating from "./rating";

const Categories = () => {
  const { t } = useTranslation("translation");

  const dispatchProduct = useDispatch();
  const dispatchTotalRow = useDispatch();
  const [classCategory1, setClassCategory1] = useState(false);
  const [classCategory2, setClassCategory2] = useState(false);
  const [classCategory3, setClassCategory3] = useState(false);

  const [classMenu1, setClassMenu1] = useState(false);
  const [classMenu2, setClassMenu2] = useState(false);
  const [classMenu3, setClassMenu3] = useState(false);
  const [classMenu4, setClassMenu4] = useState(false);
  const [classMenu5, setClassMenu5] = useState(false);
  const [classMenu6, setClassMenu6] = useState(false);

  const handleSpecies = (species) => {
    dispatchProduct(
      actFetchProductRequest({
        _page: 1,
        _limit: 6,
        species: species,
      })
    );
    dispatchTotalRow(
      actFetchTotalRowsRequest({
        species: species,
      })
    );
    if (species === "cosmetic") {
      setClassCategory1(!classCategory1);
      setClassCategory2(false);
      setClassCategory3(false);
      setClassMenu1(false);
      setClassMenu2(false);
      setClassMenu3(false);
    }
    if (species === "makeup") {
      setClassCategory2(!classCategory2);
      setClassCategory1(false);
      setClassCategory3(false);
      setClassMenu4(false);
      setClassMenu5(false);
      setClassMenu6(false);
    }
    if (species === "perfume") {
      setClassCategory3(!classCategory3);
      setClassCategory1(false);
      setClassCategory2(false);
    }
  };

  const handleCategory = (category) => {
    dispatchProduct(
      actFetchProductRequest({
        _page: 1,
        _limit: 6,
        category: category,
      })
    );
    dispatchTotalRow(
      actFetchTotalRowsRequest({
        category: category,
      })
    );
    if (category === "lotions") {
      setClassMenu1(true);
      setClassMenu2(false);
      setClassMenu3(false);
      setClassMenu4(false);
      setClassMenu5(false);
      setClassMenu6(false);
    }
    if (category === "mask") {
      setClassMenu2(true);
      setClassMenu1(false);
      setClassMenu3(false);
      setClassMenu4(false);
      setClassMenu5(false);
      setClassMenu6(false);
    }
    if (category === "cleanser") {
      setClassMenu3(true);
      setClassMenu2(false);
      setClassMenu1(false);
      setClassMenu4(false);
      setClassMenu5(false);
      setClassMenu6(false);
    }
    if (category === "lipstick") {
      setClassMenu4(true);
      setClassMenu2(false);
      setClassMenu3(false);
      setClassMenu1(false);
      setClassMenu5(false);
      setClassMenu6(false);
    }
    if (category === "mascara") {
      setClassMenu5(true);
      setClassMenu2(false);
      setClassMenu3(false);
      setClassMenu4(false);
      setClassMenu1(false);
      setClassMenu6(false);
    }
    if (category === "blusher") {
      setClassMenu6(true);
      setClassMenu2(false);
      setClassMenu3(false);
      setClassMenu4(false);
      setClassMenu5(false);
      setClassMenu1(false);
    }
    if (category === "perfume") {
    }
  };

  return (
    <aside>
      <div className="categories">
        <div className="categories__content">
          <div className="categories__content__title border-solid">
            <i className="fas fa-bars"></i>
            <h1>{t("grid.title")}</h1>
          </div>
          <div
            className={`categories__content__cosmetics border-dotted ${
              classCategory1 ? "active" : ""
            }`}
          >
            <h2
              onClick={() => handleSpecies("cosmetic")}
              style={{ cursor: "pointer" }}
            >
              {t("grid.category1")}
              {classCategory1 ? (
                <i className="fas fa-caret-down"></i>
              ) : (
                <i className="fas fa-caret-right"></i>
              )}
            </h2>
            <ul className={classCategory1 ? "block" : "disable"}>
              <li
                className={`${classMenu1 ? "active" : ""}`}
                onClick={() => handleCategory("lotions")}
                style={{ cursor: "pointer" }}
              >
                {t("grid.menu1_1")}
              </li>
              <li
                className={`${classMenu2 ? "active" : ""}`}
                onClick={() => handleCategory("mask")}
                style={{ cursor: "pointer" }}
              >
                {t("grid.menu1_2")}
              </li>
              <li
                className={`${classMenu3 ? "active" : ""}`}
                onClick={() => handleCategory("cleanser")}
                style={{ cursor: "pointer" }}
              >
                {t("grid.menu1_3")}
              </li>
            </ul>
          </div>
          <div
            className={`categories__content__jewelry border-dotted ${
              classCategory2 ? "active" : ""
            }`}
          >
            <h2
              onClick={() => handleSpecies("makeup")}
              style={{ cursor: "pointer" }}
            >
              {t("grid.category2")}
              {classCategory2 ? (
                <i className="fas fa-caret-down"></i>
              ) : (
                <i className="fas fa-caret-right"></i>
              )}
            </h2>
            <ul className={classCategory2 ? "block" : "disable"}>
              <li
                className={`${classMenu4 ? "active" : ""}`}
                onClick={() => handleCategory("lipstick")}
                style={{ cursor: "pointer" }}
              >
                {t("grid.menu2_1")}
              </li>
              <li
                className={`${classMenu5 ? "active" : ""}`}
                onClick={() => handleCategory("mascara")}
                style={{ cursor: "pointer" }}
              >
                {t("grid.menu2_2")}
              </li>
              <li
                className={`${classMenu6 ? "active" : ""}`}
                onClick={() => handleCategory("blusher")}
                style={{ cursor: "pointer" }}
              >
                {t("grid.menu2_3")}
              </li>
            </ul>
          </div>
          <div
            className={`categories__content__accessories border-dotted ${
              classCategory3 ? "active" : ""
            }`}
          >
            <h2
              onClick={() => handleSpecies("perfume")}
              style={{ cursor: "pointer" }}
            >
              {t("grid.category3")}
              {classCategory3 ? (
                <i className="fas fa-caret-down"></i>
              ) : (
                <i className="fas fa-caret-right"></i>
              )}
            </h2>
          </div>
        </div>
      </div>
      <div className="categories__tag">
        <h1 className="border-solid">{t("grid.tagTitle")}</h1>
        <div className="categories__tag__btn">
          <button
            className="btn-tag1"
            type="button"
            onClick={() => handleCategory("lotions")}
          >
            {t("grid.tag1")}
          </button>
          <button
            className="btn-tag2"
            type="button"
            onClick={() => handleCategory("mask")}
          >
            {t("grid.tag2")}
          </button>
          <button
            className="btn-tag3"
            type="button"
            onClick={() => handleCategory("cleanser")}
          >
            {t("grid.tag3")}
          </button>
          <button
            className="btn-tag4"
            type="button"
            onClick={() => handleCategory("lipstick")}
          >
            {t("grid.tag4")}
          </button>
          <button
            className="btn-tag5"
            type="button"
            onClick={() => handleCategory("mascara")}
          >
            {t("grid.tag5")}
          </button>
          <button
            className="btn-tag6"
            type="button"
            onClick={() => handleCategory("blusher")}
          >
            {t("grid.tag6")}
          </button>
          <button
            className="btn-tag7"
            type="button"
            onClick={() => handleCategory("perfume")}
          >
            {t("grid.tag7")}
          </button>
        </div>
      </div>
      <FilterPrice />
      <Rating />
      <div className="categories__img">
        <img src={require("../../assets/img/grid/mandala-store.jpg")} alt="" />
      </div>
    </aside>
  );
};

export default Categories;
