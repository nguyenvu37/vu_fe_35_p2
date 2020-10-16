import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import callApi from "./callApi";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { actDelCart, actNumCart } from "../actions/actions";
import { getQuantity } from "./calculation";

const AddToCart = (props) => {
  const { t } = useTranslation("translation");
  const [rating, setRating] = useState(props.rate);
  const [classRating, setClassRating] = useState(false);
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const quanDetail = useSelector((state) => state.quantity.num);
  const [quantityDetail, setQuantityDetail] = useState(0);

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

  useEffect(() => {
    setQuantityDetail(quanDetail);
    return () => {
      setQuantityDetail(0);
    };
  }, [quanDetail]);

  const handleAddCart = async () => {
    const { data } = props;
    const inCart = JSON.parse(localStorage.getItem("inCart")) || [];
    let dataCart = {
      id: uuidv4(),
      code: data.id,
      name: data.name,
      img: data.img,
      price: data.price,
      discount: data.discount,
      quantity: 1 + quantityDetail,
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
                  quantity: carts[index].quantity + 1 + quantityDetail,
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
              ).then((res) => {
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

            callApi(`carts`, "post", { ...cart }).then((res) => {
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
            quantity: inCart[index].quantity + 1 + quantityDetail,
          };
          localStorage.setItem("inCart", JSON.stringify([...inCart]));
          dispatchNumCart(actNumCart(getQuantity([...inCart])));
        } else {
          let cart = {
            ...dataCart,
          };
          inCart.unshift({ ...cart });
          localStorage.setItem("inCart", JSON.stringify([...inCart]));
          dispatchNumCart(actNumCart(getQuantity([...inCart])));
        }
      } else {
        let cart = {
          ...dataCart,
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
