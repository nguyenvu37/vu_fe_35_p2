import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AddToCart = (props) => {
  const { t } = useTranslation("translation");
  return (
    <div className="item-buying">
      <button>{t("addToCart")}</button>
      <Link className="link" to="/">
        <i className="fas fa-heart"></i>
      </Link>
      <Link className="link" to="/">
        <i className="fas fa-comment"></i>
      </Link>
    </div>
  );
};

export default AddToCart;
