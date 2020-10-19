import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../actions/actions";
import callApi from "../../common/callApi";
import FilterPrice from "./filterPrice";
import Rating from "./rating";
import { getTranslationCategory } from "../../common/validate";

const Categories = () => {
  const { t } = useTranslation("translation");
  const [species, setSpecies] = useState([]);

  const dispatchProduct = useDispatch();
  const dispatchTotalRow = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await callApi(`categories`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          const dataSpecies = [...res.data].map(
            (item) =>
              (item = {
                ...item,
                classSpecies: false,
              })
          );
          setSpecies([...dataSpecies]);
        } else setSpecies([]);
      });
    };
    fetchData();
  }, []);

  const handleSpecies = (data) => {
    const newSpecies = [];
    species.forEach((item) => {
      if (item.species !== data) {
        item = {
          ...item,
          classSpecies: false,
        };
        newSpecies.push(item);
      } else {
        item = { ...item, classSpecies: true };
        newSpecies.push(item);
      }
    });

    setSpecies([...newSpecies]);

    dispatchProduct(
      actFetchProductRequest({
        _page: 1,
        _limit: 6,
        species: data,
      })
    );
    dispatchTotalRow(
      actFetchTotalRowsRequest({
        species: data,
      })
    );
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
  };

  return (
    <aside>
      <div className="categories">
        <div className="categories__content">
          <div className="categories__content__title border-solid">
            <i className="fas fa-bars"></i>
            <h1>{t("grid.title")}</h1>
          </div>
          {species.length > 0
            ? species.map((item, index) => (
                <div
                  className="categories__content__cosmetics border-solid"
                  key={index + 1}
                >
                  <h2
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSpecies(item.species)}
                  >
                    {getTranslationCategory(item.species)}
                    {item.classSpecies ? (
                      <i className="fas fa-caret-down"></i>
                    ) : (
                      <i className="fas fa-caret-right"></i>
                    )}
                  </h2>
                  <ul className={item.classSpecies ? "block" : "disable"}>
                    {item.category.map((ele, i) => (
                      <li
                        key={i + 1}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleCategory(ele)}
                      >
                        {getTranslationCategory(ele)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : ""}
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
