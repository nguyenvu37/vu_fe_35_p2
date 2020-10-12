import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import callApi from "./callApi";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";

const AddToCart = (props) => {
  const { t } = useTranslation("translation");
  const [rating, setRating] = useState(props.rate);
  const [classRating, setClassRating] = useState(false);
  const loggedIn = useSelector((state) => state.users.loggedIn);

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

  const handleAddCart = async () => {
    const { data } = props;
    const inCart = JSON.parse(localStorage.getItem("inCart")) || [];

    NotificationManager.success("Success message", t("inCart.success"));

    if (loggedIn || localStorage.getItem("Token") !== null) {
      console.log("test");

      await callApi(`carts`, "get", null).then((res) => {
        if (res && res.status === 200) {
          const carts = [...res.data];
          if (carts.length !== 0) {
            let index = carts.findIndex((item) => item.code === data.id);
            if (index !== -1) {
              let cart = {
                ...carts[index],
                quantity: carts[index].quantity + 1,
              };

              callApi(`carts/${carts[index].id}`, "put", { ...cart });
            } else {
              let cart = {
                id: uuidv4(),
                code: data.id,
                name: data.name,
                img: data.img,
                price: data.price,
                discount: data.discount,
                quantity: 1,
                userId: JSON.parse(localStorage.getItem("Token")).id,
              };

              callApi("carts", "post", { ...cart });
            }
          } else {
             let cart = {
                id: uuidv4(),
                code: data.id,
                name: data.name,
                img: data.img,
                price: data.price,
                discount: data.discount,
                quantity: 1,
                userId: JSON.parse(localStorage.getItem("Token")).id,
              };

              callApi("carts", "post", { ...cart });
          }
        }
      });

    } else {
      console.log("test1");
      if (inCart.length !== 0) {
        const index = inCart.findIndex((item) => item.code === data.id);
        if (index !== -1) {
          let cart = {
            ...inCart,
            quantity: inCart[index].quantity + 1,
          };
          inCart.unshift({ ...cart });
          localStorage.setItem("inCart", JSON.stringify([...inCart]));
        } else {
          let cart = {
            id: uuidv4(),
            code: data.id,
            name: data.name,
            img: data.img,
            price: data.price,
            discount: data.discount,
            quantity: 1,
          };
          inCart.unshift({ ...cart });
          localStorage.setItem("inCart", JSON.stringify([...inCart]));
        }
      } else {
        let cart = {
          id: uuidv4(),
          code: data.id,
          name: data.name,
          img: data.img,
          price: data.price,
          discount: data.discount,
          quantity: 1,
        };
        inCart.unshift({ ...cart });
        localStorage.setItem("inCart", JSON.stringify([...inCart]));
      }
    }
  };

  return (
    <div className="item-buying">
      <button className="add-cart" onClick={handleAddCart}>
        {t("addToCart")}
      </button>
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
