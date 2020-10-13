import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import callApi from "../../common/callApi";
import FormError from "../../common/FormError";

const InfoCustomerList = (props) => {
  const { t } = useTranslation("translation");
  const [stateInput, setStateInput] = useState({
    fullname: {
      errorMessage: "",
    },
    email: {
      errorMessage: "",
    },
    phone: {
      errorMessage: "",
    },
    address: {
      errorMessage: "",
    },
  });

  const inputFullname = useRef();
  const inputEmail = useRef();
  const inputAddress = useRef();
  const inputPhone = useRef();

  const getValueInput = (name) => {
    switch (name) {
      case "email":
        return inputEmail.current.value;
      case "fullname":
        return inputFullname.current.value;
      case "address":
        return inputAddress.current.value;
      case "phone":
        return inputPhone.current.value;
      default:
        break;
    }
  };

  const validateInput = (type, checkingText) => {
    if (checkingText === "") {
      return { errorMessage: t("validate.require") };
    }

    if (type === "email") {
      const regexp = /\S+@\S+\.\S+/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.email"),
        };
      }
    }

    if (type === "fullname") {
      const regexp = /^[a-zA-Z ]+$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.fullname"),
        };
      }
    }

    if (type === "address") {
      const regexp = /^[a-zA-Z0-9\s,-]*$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.address"),
        };
      }
    }

    if (type === "phone") {
      const regexp = /^\d{10}$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.phone"),
        };
      }
    }
  };

  const handleInputValidate = (e) => {
    const { name } = e.target;
    const { errorMessage } = validateInput(name, getValueInput(name));
    const newState = { ...stateInput[name] };
    newState.errorMessage = errorMessage;
    setStateInput({ ...stateInput, [name]: newState });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const fullname = inputFullname.current.value;
    const address = inputAddress.current.value;
    const email = inputEmail.current.value;
    const phone = inputPhone.current.value;

    if (fullname !== "" && address !== "" && email !== "" && phone !== "") {
      if (localStorage.getItem("Token") === null) {
        checkEmailDuplicate();
      } else handlePaymentPage();
    } else
      NotificationManager.warning("Warning message", t("register.require"));
  };

  const checkEmailDuplicate = () => {
    callApi(`users?email=${inputEmail.current.value}`, "get", null).then(
      (res) => {
        if (res.data.length === 0) {
          handlePaymentPage();
          return false;
        } else {
          NotificationManager.warning(
            "Warning message",
            t("register.email-exist")
          );
          return true;
        }
      }
    );
  };

  const handlePaymentPage = async () => {
    if (localStorage.getItem("Token") !== null) {
      let customer = {
        id: uuidv4(),
        userId: JSON.parse(localStorage.getItem("Token")).id,
        fullname: inputFullname.current.value,
        email: inputEmail.current.value,
        address: inputAddress.current.value,
        phone: inputPhone.current.value,
      };

      await callApi(`customers`, "post", { ...customer }).then((res) => {
        props.history.push("/payment");
      });
    } else {
      let customer = {
        id: uuidv4(),
        fullname: inputFullname.current.value,
        email: inputEmail.current.value,
        address: inputAddress.current.value,
        phone: inputPhone.current.value,
      };

      localStorage.setItem("customers", JSON.stringify({ ...customer }));
      props.history.push("/payment");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("Token") !== null) {
      inputFullname.current.value =
        JSON.parse(localStorage.getItem("Token")).firstName +
        " " +
        JSON.parse(localStorage.getItem("Token")).lastName;
      inputEmail.current.value = JSON.parse(
        localStorage.getItem("Token")
      ).email;
      inputPhone.current.value = JSON.parse(
        localStorage.getItem("Token")
      ).phone;
    }
  }, []);

  return (
    <section>
      <div className="information-checkout">
        <div className="box">
          <div className="information-checkout__content">
            <div className="information-checkout__content__title title-content">
              <h1>{t("information.title")}</h1>
            </div>
            <div className="information-checkout__content__form form">
              <form onSubmit={(e) => handleContinue(e)}>
                <div className="form-group">
                  <label>
                    {t("information.label1")} <span>*</span>
                  </label>
                  <input
                    id="infor-receiver"
                    name="fullname"
                    type="text"
                    ref={inputFullname}
                    onKeyUp={handleInputValidate}
                  />
                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <FormError errorMessage={stateInput.fullname.errorMessage} />
                </div>
                <div className="form-group">
                  <label>
                    {t("information.label2")} <span>*</span>
                  </label>
                  <input
                    id="infor-address"
                    name="address"
                    type="text"
                    ref={inputAddress}
                    onKeyUp={handleInputValidate}
                  />
                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <FormError errorMessage={stateInput.address.errorMessage} />
                </div>
                <div className="form-group">
                  <label>
                    {t("information.label3")} <span>*</span>
                  </label>
                  {localStorage.getItem("Token") !== null ? (
                    <input
                      id="infor-email"
                      name="email"
                      type="text"
                      ref={inputEmail}
                      onKeyUp={handleInputValidate}
                      readOnly
                    />
                  ) : (
                    <input
                      id="infor-email"
                      name="email"
                      type="text"
                      ref={inputEmail}
                      onKeyUp={handleInputValidate}
                    />
                  )}
                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <FormError errorMessage={stateInput.email.errorMessage} />
                </div>
                <div className="form-group">
                  <label>
                    {t("information.label4")} <span>*</span>
                  </label>
                  {localStorage.getItem("Token") !== null ? (
                    <input
                      id="infor-phone"
                      name="phone"
                      type="telephone"
                      ref={inputPhone}
                      onKeyUp={handleInputValidate}
                      readOnly
                    />
                  ) : (
                    <input
                      id="infor-phone"
                      name="phone"
                      type="telephone"
                      ref={inputPhone}
                      onKeyUp={handleInputValidate}
                    />
                  )}

                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <FormError errorMessage={stateInput.phone.errorMessage} />
                </div>
                <div className="information-checkout__form__btn btn-form">
                  <button>
                    <i className="fas fa-hand-point-left"></i>
                    {t("information.btn-back")}
                  </button>
                  <button type="submit">{t("information.btn-goon")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(InfoCustomerList);
