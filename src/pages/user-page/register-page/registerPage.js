import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormError from "../../../common/FormError";
import { NotificationManager } from "react-notifications";
import callApi from "../../../common/callApi";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "../../../actions/actions";
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
  const { t } = useTranslation("translation");
  const dispatchLogin = useDispatch();
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const [stateInput, setStateInput] = useState({
    firstname: {
      errorMessage: "",
    },
    lastname: {
      errorMessage: "",
    },
    email: {
      errorMessage: "",
    },
    phone: {
      errorMessage: "",
    },
    password: {
      errorMessage: "",
    },
    confirmPass: {
      errorMessage: "",
    },
  });

  const inputFirstname = useRef();
  const inputEmail = useRef();
  const inputLastname = useRef();
  const inputPhone = useRef();
  const inputPassword = useRef();
  const inputConfirmPass = useRef();

  const getValueInput = (name) => {
    switch (name) {
      case "email":
        return inputEmail.current.value;
      case "firstname":
        return inputFirstname.current.value;
      case "lastname":
        return inputLastname.current.value;
      case "phone":
        return inputPhone.current.value;
      case "password":
        return inputPassword.current.value;
      case "confirmPass":
        return inputConfirmPass.current.value;
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

    if (type === "firstname") {
      const regexp = /^[a-zA-Z]+$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.firstname"),
        };
      }
    }

    if (type === "lastname") {
      const regexp = /^[a-zA-Z]+$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.lastname"),
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

    if (type === "password") {
      const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.password"),
        };
      }
    }

    if (type === "confirmPass") {
      const regexPass = inputPassword.current.value;
      if (checkingText === regexPass) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: t("validate.confirm"),
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = inputFirstname.current.value;
    const lastName = inputLastname.current.value;
    const email = inputEmail.current.value;
    const phone = inputPhone.current.value;
    const password = inputPassword.current.value;
    const confirmPassword = inputConfirmPass.current.value;

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phone !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (password !== confirmPassword) {
        NotificationManager.warning(
          "Warning message",
          t("register.pass-again")
        );
        return false;
      }
      checkEmailDuplicate();
    } else
      NotificationManager.warning("Warning message", t("register.require"));
  };

  const checkEmailDuplicate = () => {
    callApi(`users?email=${inputEmail.current.value}`, "get", null).then(
      (res) => {
        if (res.data.length === 0) {
          handleLogin();
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

  const handleLogin = () => {
    const user = {
      id: uuidv4(),
      email: inputEmail.current.value,
      firstName: inputFirstname.current.value,
      lastName: inputLastname.current.value,
      password: inputPassword.current.value,
      phone: inputPhone.current.value,
      role: "menber",
    };

    callApi(`users`, "Post", user).then((res) => {
      if (res && res.status === 201) {
        localStorage.setItem(
          "Token",
          JSON.stringify({
            ...res.data,
            password: "******",
            role: "***",
          })
        );
        NotificationManager.success("Success message", t("register.success"));
        dispatchLogin(actLogin());
      } else NotificationManager.error("Error message", t("resgiter.err"));
    });
  };

  if (loggedIn || localStorage.getItem("Token") !== null) {
    window.console.log("props :", props);
    props.history.goBack();
    return null;
  }

  return (
    <main>
      <section className="register">
        <div className="box">
          <div className="register__content">
            <div className="register__content__title title-content">
              <h1 style={{ textShadow: "-2px 2px 2px rgba(229,229,229,0.74)" }}>
                {t("register.h1")}
              </h1>
            </div>
            <div className="register__content__form form">
              <form onSubmit={handleSubmit}>
                <div className="register__content__form__title1">
                  <h3
                    style={{
                      textShadow: "-2px 2px 2px rgba(229,229,229,0.74)",
                    }}
                  >
                    {t("register.h3")}
                  </h3>
                </div>
                <div className="form-group">
                  <label>
                    {t("register.first-name")} <span>*</span>
                  </label>
                  <input
                    type="text"
                    ref={inputFirstname}
                    name="firstname"
                    onKeyUp={handleInputValidate}
                  />
                  <FormError errorMessage={stateInput.firstname.errorMessage} />
                </div>
                <div className="form-group">
                  <label>
                    {t("register.last-name")} <span>*</span>
                  </label>
                  <input
                    type="text"
                    ref={inputLastname}
                    name="lastname"
                    onKeyUp={handleInputValidate}
                  />
                  <FormError errorMessage={stateInput.lastname.errorMessage} />
                </div>
                <div className="form-group">
                  <label>
                    {t("register.email")} <span>*</span>
                  </label>
                  <input
                    type="email"
                    ref={inputEmail}
                    name="email"
                    onKeyUp={handleInputValidate}
                  />
                  <FormError errorMessage={stateInput.email.errorMessage} />
                </div>
                <div className="form-group">
                  <label>
                    {t("register.phone")} <span>*</span>
                  </label>
                  <input
                    type="phone"
                    ref={inputPhone}
                    name="phone"
                    onKeyUp={handleInputValidate}
                  />
                  <FormError errorMessage={stateInput.phone.errorMessage} />
                </div>
                <div className="register__content__form__title2">
                  <h3
                    style={{
                      textShadow: "-2px 2px 2px rgba(229,229,229,0.74)",
                    }}
                  >
                    {t("register.info-login")}
                  </h3>
                </div>
                <div className="form-group">
                  <label>
                    {t("register.password")} <span>*</span>
                  </label>
                  <input
                    type="password"
                    ref={inputPassword}
                    name="password"
                    onKeyUp={handleInputValidate}
                  />
                  <FormError errorMessage={stateInput.password.errorMessage} />
                </div>
                <div className="form-group">
                  <label>{t("register.confirm")}</label>
                  <input
                    type="password"
                    ref={inputConfirmPass}
                    name="confirmPass"
                    onKeyUp={handleInputValidate}
                  />
                  <FormError
                    errorMessage={stateInput.confirmPass.errorMessage}
                  />
                </div>
                <div className="register__content__form__btn btn-form">
                  <button
                    type="submit"
                    style={{ boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" }}
                  >
                    {t("register.btn-register")}
                  </button>
                  <button
                    style={{ boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" }}
                  >
                    <i className="fas fa-reply"></i>
                    {t("register.btn-back")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withRouter(RegisterPage);
