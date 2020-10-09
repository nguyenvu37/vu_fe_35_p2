import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import callApi from "./callApi";

const AddToCart = (props) => {
  const { t } = useTranslation("translation");
  const [rating, setRating] = useState(props.rate);
  const [classRating, setClassRating] = useState(false);

  const handleCallRating = () => {
    setClassRating(!classRating);
  };

  const changeRating = (newRating) => {
    let newRate = (props.rate + parseInt(newRating)) / 2;
    callApi(`products/${props.data.id}`, "put", {
      ...props.data,
      rating: newRate,
    });
    setRating(newRating);
    setClassRating(!classRating);
  };
  return (
    <div className="item-buying">
      <button className="add-cart">{t("addToCart")}</button>
      <button className="link-btn" onClick={handleCallRating}>
        <i className="fas fa-heart"></i>
      </button>
      <button className="link-btn">
        <i className="fas fa-comment"></i>
      </button>
      {classRating ? (
        <div className={`rating`}>
          <StarRatings
            rating={rating}
            starRatedColor="#789629"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
            style={{ width: "100%", height: "30px" }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddToCart;
