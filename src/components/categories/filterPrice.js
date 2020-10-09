import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../actions/actions";
import getValuePrices from "../../common/getValuePrice";

const FilterPrice = () => {
  const [price, setPrice] = useState([]);
  const { t } = useTranslation("translation");
  const products = useSelector((state) => state.totalRow);
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const dispatchTotalRow = useDispatch();
  const [isPrice, setIsPrice] = useState(false);

  useEffect(() => {
    if (products.length !== 0) {
      const dataProducts = [...products]
        .map((item) => item.price)
        .sort((a, b) => a - b);
      const arrPrices = getValuePrices(dataProducts);
      setPrice([...arrPrices]);
    }
  }, [products]);

  const handleDataFromPrice = (range) => {
    const { category, species } = filters;
    let arrPrice = [{ ...range }];
    dispatch(
      actFetchProductRequest({
        category: category,
        species: species,
        price_gte: arrPrice[0].min,
        _limit: 6,
        _page: 1,
      })
    );

    dispatchTotalRow(
      actFetchTotalRowsRequest({
        category: category,
        species: species,
        price_gte: arrPrice[0].min,
      })
    );

    setPrice([...arrPrice]);
    setIsPrice(true);
  };

  const handleBackDataPrice = () => {
    const { category, species } = filters;
    if (isPrice) {
      dispatch(
        actFetchProductRequest({
          category: category,
          species: species,
          _limit: 6,
          _page: 1,
        })
      );

      dispatchTotalRow(
        actFetchTotalRowsRequest({ category: category, species: species })
      );
      setIsPrice(false);
    }
  };

  return (
    <div className="facet__item" style={{ margin: "20px 0" }}>
      <h1>{t("filter.price")}</h1>
      <div className="facet__item__list" style={{ margin: "20px 0" }}>
        {price.map((item, index) => {
          return (
            <div className="facet__item__list__price" key={index}>
              <div
                onClick={() => handleDataFromPrice({ min: item.min })}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-chevron-right"></i>
                <span className="facet-price">
                  {parseFloat(item.min)
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  đ
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ width: "100%" }}>
        <button
          style={{
            width: "60px",
            background: "#fff",
            color: "green",
            cursor: "pointer",
            border: "1px solid green",
            outline: "none",
          }}
          onClick={handleBackDataPrice}
        >
          {t("filter.back")}
        </button>
      </div>
    </div>
  );
};

export default FilterPrice;
