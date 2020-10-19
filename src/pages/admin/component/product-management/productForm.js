import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NotificationManager } from "react-notifications";
import { useHistory, useParams } from "react-router-dom";
import callApi from "../../../../common/callApi";

const ProductForm = () => {
  const { t } = useTranslation("translation");
  const inputCode = useRef();
  const inputManuFacturer = useRef();
  const inputName = useRef();
  const inputDiscount = useRef();
  const inputPrice = useRef();
  const inputRating = useRef();
  const inputCategory = useRef();
  const inputSpecies = useRef();
  const inputStatus = useRef();
  const inputView = useRef();
  const inputHot = useRef();
  const inputNew = useRef();
  const inputImg = useRef();
  const inputImgDetail = useRef();
  const inputInfo = useRef();

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("params :>> ", params);
    if (params.id) {
      const fetchData = async () => {
        await callApi(`products?id=${params.id}`, "get", null).then((res) => {
          if (res && res.status === 200 && res.data) {
            const data = [...res.data][0];
            inputCode.current.value = data.id;
            inputManuFacturer.current.value = data.manufacturer;
            inputName.current.value = data.name;
            inputDiscount.current.value = data.discount;
            inputRating.current.value = data.rating;
            inputPrice.current.value = data.price;
            inputCategory.current.value = data.category;
            inputSpecies.current.value = data.species;
            inputStatus.current.value = data.status;
            inputView.current.value = data.view;
            inputHot.current.checked = data.hot === "hot" ? true : false;
            inputNew.current.checked = data.new === "new" ? true : false;
            inputImg.current.value = data.img;
            inputImgDetail.current.value = data.imgDetail;
            inputInfo.current.value = data.info;
          }
        });
      };
      fetchData();
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = inputCode.current.value;
    const manufacturer = inputManuFacturer.current.value;
    const name = inputName.current.value;
    const discount = inputDiscount.current.value;
    const rating = inputRating.current.value;
    const price = inputPrice.current.value;
    const category = inputCategory.current.value;
    const species = inputSpecies.current.value;
    const status = inputStatus.current.value;
    const view = inputView.current.value;
    const hot = inputHot.current.checked;
    const newProduct = inputNew.current.checked;
    const img = inputImg.current.value;
    const imgDetail = inputImgDetail.current.value;
    const info = inputInfo.current.value;

    let dataProduct = {
      id: code,
      manufacturer: manufacturer,
      name: name,
      discount: parseInt(discount),
      rating: parseInt(rating),
      price: parseInt(price),
      category: category,
      species: species,
      status: status,
      view: parseInt(view),
      hot: hot ? "hot" : "",
      new: newProduct ? "new" : "",
      img: img,
      imgDetail: imgDetail,
      info: info,
    };

    if (
      code !== "" &&
      manufacturer !== "" &&
      name !== "" &&
      discount !== "" &&
      rating !== "" &&
      price !== "" &&
      category !== "" &&
      species !== "" &&
      view !== "" &&
      img !== "" &&
      imgDetail !== "" &&
      info !== ""
    ) {
      if (params.id) {
        await await callApi(`products/${params.id}`, "put", {
          ...dataProduct,
        }).then(() => {
          NotificationManager.success(t("admin.edit-success"));
          history.push("/admin/product-management");
        });
      } else {
        await callApi(`products`, "post", { ...dataProduct }).then(() => {
          NotificationManager.success(t("admin.add-success"));
          history.push("/admin/product-management");
        });
      }
    } else {
      NotificationManager.warning(t("login.format"));
      return false;
    }
  };

  return (
    <div className="form">
      <div className="btn-form" style={{ width: "100%" }}>
        <h1
          style={{
            textTransform: "uppercase",
            margin: "20px 10px",
            textAlign: "center",
            width: "100%",
          }}
        >
          {params.id ? t("admin.h1-add2") : t("admin.h1-add1")}
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{t("admin.code")}: </label>
          <input ref={inputCode} type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>{t("admin.manufacturer")}: </label>
          <input ref={inputManuFacturer} type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>{t("admin.name")} : </label>
          <input ref={inputName} type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>{t("admin.discount")}: </label>
          <input ref={inputDiscount} type="number" className="form-control" />
        </div>

        <div className="form-group">
          <label>{t("admin.rating")}: </label>
          <input type="text" className="form-control" ref={inputRating} />
        </div>

        <div className="form-group">
          <label>{t("admin.price")}: </label>
          <input type="number" className="form-control" ref={inputPrice} />
        </div>

        <div className="form-group">
          <label>{t("admin.category")}: </label>
          <input type="text" className="form-control" ref={inputCategory} />
        </div>

        <div className="form-group">
          <label>{t("admin.species")}: </label>
          <input type="text" className="form-control" ref={inputSpecies} />
        </div>

        <div className="form-group">
          <label>{t("admin.status")}: </label>
          <select style={{ width: "100px" }} ref={inputStatus}>
            <option value="inStock">In stock</option>
            <option value="outStock">Out stock</option>
          </select>
        </div>

        <div className="form-group">
          <label>{t("admin.view")}: </label>
          <input type="number" className="form-control" ref={inputView} />
        </div>

        <div className="form-group form-checkbox">
          <label>{t("admin.hot")}: </label>
          <input type="checkbox" className="form-control" ref={inputHot} />
        </div>

        <div className="form-group form-checkbox">
          <label>{t("admin.new")}: </label>
          <input type="checkbox" className="form-control" ref={inputNew} />
        </div>

        <div className="form-group ">
          <label>{t("admin.img")}: </label>
          <input type="text" className="form-control" ref={inputImg} />
        </div>

        <div className="form-group">
          <label>{t("admin.imgDetail")}: </label>
          <input type="text" className="form-control" ref={inputImgDetail} />
        </div>

        <div className="form-group">
          <label>{t("admin.info")}: </label>
          <textarea
            style={{ padding: "10px", outline: "none" }}
            type="text"
            rows="4"
            cols="50"
            ref={inputInfo}
          />
        </div>
        <div className="btn-form">
          <button
            className="btn"
            style={{
              boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)",
              marginRight: "10px",
              backgroundColor: "#6c757d",
            }}
            onClick={() => history.goBack()}
            type="button"
          >
            {t("admin.btn-cancel")}
          </button>
          <button
            className="btn"
            style={{
              boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)",
              backgroundColor: "#007bff",
            }}
          >
            {t("admin.btn-save")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
