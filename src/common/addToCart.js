import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import callApi from "./callApi";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { actAddCart, actDelCart, actNumCart } from "../actions/actions";
import { getQuantity } from "./calculation";
import { FacebookProvider } from "react-facebook";

const AddToCart = (props) => {
  const { t } = useTranslation("translation");
  const [rating, setRating] = useState(props.rate);
  const [classRating, setClassRating] = useState(false);
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const { quanDetail } = props;
  const inCart = useSelector((state) => state.addCart);
  const dispatchAddCart = useDispatch();

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

    let dataCart = {
      id: uuidv4(),
      code: data.id,
      name: data.name,
      img: data.img,
      price: data.price,
      discount: data.discount,
      quantity: quanDetail !== undefined ? parseInt(quanDetail) : 1,
      status: "unpaid",
    };

    NotificationManager.success(t("inCart.success"));

    if (loggedIn || localStorage.getItem("Token") !== null) {
      await callApi(
        `carts?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
        "get",
        null
      ).then((res) => {
        if (res && res.status === 200) {
          const dataCarts = [...res.data];
          if (dataCarts.length > 0) {
            const carts = dataCarts[0].data;
            if (carts.length > 0) {
              let index = carts.findIndex((item) => item.code === data.id);
              if (index !== -1) {
                carts[index] = {
                  ...carts[index],
                  quantity:
                    quanDetail !== undefined
                      ? parseInt(quanDetail)
                      : carts[index].quantity + 1,
                };

                let cart = {
                  ...dataCarts[0],
                  data: [...carts],
                };
                callApi(
                  `carts/${JSON.parse(localStorage.getItem("Token")).id}`,
                  "put",
                  { ...cart }
                ).then(() => {
                  dispatchNumCart(actNumCart(carts[index].quantity));
                });
              } else {
                let cart = {
                  ...dataCarts[0],
                  data: [
                    {
                      ...dataCart,
                    },
                    ...carts,
                  ],
                };

                callApi(
                  `carts/${JSON.parse(localStorage.getItem("Token")).id}`,
                  "put",
                  { ...cart }
                );
                dispatchNumCart(actDelCart(carts[0].id));
              }
            } else {
              let cart = {
                ...dataCarts[0],
                data: [
                  {
                    ...dataCart,
                  },
                ],
              };

              callApi(
                `carts/${JSON.parse(localStorage.getItem("Token")).id}`,
                "put",
                { ...cart }
              ).then(() => {
                dispatchNumCart(actNumCart(cart.data[0].quantity));
              });
            }
          } else {
            let cart = {
              id: JSON.parse(localStorage.getItem("Token")).id,
              userId: JSON.parse(localStorage.getItem("Token")).id,
              data: [
                {
                  ...dataCart,
                },
              ],
            };

            callApi(`carts`, "post", { ...cart }).then(() => {
              dispatchNumCart(actNumCart(cart.data.quantity));
            });
          }
        }
      });
    } else {
      if (inCart.length > 0) {
        let index = inCart.findIndex((item) => item.code === data.id);
        if (index !== -1) {
          inCart[index] = {
            ...inCart[index],
            quantity:
              quanDetail !== undefined
                ? quanDetail
                : inCart[index].quantity + 1,
          };
          // localStorage.setItem("inCart", JSON.stringify([...inCart]));
          dispatchAddCart(actAddCart([...inCart]));
          dispatchNumCart(actNumCart(getQuantity([...inCart])));
        } else {
          let cart = {
            ...dataCart,
          };
          inCart.unshift({ ...cart });
          // localStorage.setItem("inCart", JSON.stringify([...inCart]));
          dispatchAddCart(actAddCart([...inCart]));
          dispatchNumCart(actNumCart(getQuantity([...inCart])));
        }
      } else {
        let cart = {
          ...dataCart,
        };

        inCart.push({ ...cart });
        // localStorage.setItem("inCart", JSON.stringify([...inCart]));
        dispatchAddCart(actAddCart([...inCart]));
        dispatchNumCart(actNumCart(1));
      }
    }
  };

  return (
    <div className="item-buying">
      <button type="button" className="add-cart" onClick={handleAddCart}>
        {t("addToCart")}
      </button>
      <button className="link-btn" onClick={handleCallRating}>
        <i className="fas fa-heart"></i>
      </button>
      <FacebookProvider appId="15ghIr53">
        <div
          className="fb-share-button"
          data-href="http://localhost:3000/"
          data-layout="button"
          data-size="large"
        >
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            Chia sẻ
          </a>
        </div>
      </FacebookProvider>
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
