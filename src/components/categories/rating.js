import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../actions/actions";

const Rating = (props) => {
  const { t } = useTranslation("translation");
  const filters = useSelector((state) => state.filters.filters);
  const dispatchProduct = useDispatch();
  const dispatchTotalRow = useDispatch();
  const arrRating = [
    ["fas", "far", "far", "far", "far"],
    ["fas", "fas", "far", "far", "far"],
    ["fas", "fas", "fas", "far", "far"],
    ["fas", "fas", "fas", "fas", "far"],
    ["fas", "fas", "fas", "fas", "fas"],
  ];

  const handleChangeRating = (rate) => {
    const { category, species } = filters;
    dispatchProduct(
      actFetchProductRequest({
        ...filters,
        rating_gte: rate.min,
        rating_lte: rate.max,
      })
    );

    dispatchTotalRow(
      actFetchTotalRowsRequest({
        category: category,
        species: species,
        rating_gte: rate.min,
        rating_lte: rate.max,
      })
    );
  };
  return (
    <div className="facet__item" style={{ margin: "20px 0" }}>
      <h1>{t("filter.rate")}</h1>
      <div className="facet__item__list" style={{ margin: "20px 0" }}>
        {arrRating.map((item, index) => {
          return (
            <div
              className="facet__item__list__rating"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div
                className="facet__item__list__rating__star"
                onClick={() =>
                  handleChangeRating({ min: index, max: index + 1 })
                }
              >
                {item.map((r, i) => {
                  return <i className={`${r} fa-star`} key={i}></i>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
