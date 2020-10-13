import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import callApi from "./callApi";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { actNumCart } from "../actions/actions";

const AddToCart = (props) => {
  const { t } = useTranslation("translation");
  const [rating, setRating] = useState(props.rate);
  const [classRating, setClassRating] = useState(false);
  const loggedIn = useSelector((state) => state.users.loggedIn);

  const dispatchNumCart = useDispatch();

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
      await callApi(
        `carts?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
        "get",
        null
      ).then((res) => {
        if (res && res.status === 200) {
          const carts = [...res.data];
          console.log("carts", carts);
          if (carts.length > 0) {
            let index = carts.findIndex((item) => item.code === data.id);

            if (index !== -1) {
              let cart = {
                ...carts[index],
                quantity: carts[index].quantity + 1,
              };

              callApi(`carts/${carts[index].id}`, "put", {
                ...cart,
              });
              dispatchNumCart(
                actNumCart(
                  [...carts]
                    .map((item) => item.quantity)
                    .reduce((a, b) => a + b, 0)
                )
              );
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

              callApi(`carts`, "post", { ...cart });
              dispatchNumCart(
                actNumCart(
                  [...carts]
                    .map((item) => item.quantity)
                    .reduce((a, b) => a + b, 0)
                )
              );
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

            callApi(`carts`, "post", { ...cart });
            dispatchNumCart(
              actNumCart(
                [...carts]
                  .map((item) => item.quantity)
                  .reduce((a, b) => a + b, 0)
              )
            );
          }
        }
      });
    } else {
      console.log("data", data);
      if (inCart.length > 0) {
        let index = inCart.findIndex((item) => item.code === data.id);
        console.log("index", index);
        if (index !== -1) {
          inCart[index] = {
            ...inCart[index],
            quantity: inCart[index].quantity + 1,
          };
          localStorage.setItem("inCart", JSON.stringify([...inCart]));
          dispatchNumCart(
            actNumCart(
              [...inCart]
                .map((item) => item.quantity)
                .reduce((a, b) => a + b, 0)
            )
          );
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
          dispatchNumCart(
            actNumCart(
              [...inCart]
                .map((item) => item.quantity)
                .reduce((a, b) => a + b, 0)
            )
          );
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

        inCart.push({ ...cart });
        localStorage.setItem("inCart", JSON.stringify([...inCart]));
        dispatchNumCart(actNumCart(1));
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
