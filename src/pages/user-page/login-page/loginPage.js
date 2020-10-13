import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FormError from "../../../common/FormError";
import { NotificationManager } from "react-notifications";
import callApi from "../../../common/callApi";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "../../../actions/actions";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const { t } = useTranslation("translation");
  const dispatchLogin = useDispatch();
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const [stateInput, setStateInput] = useState({
    email: {
      errorMessage: "",
    },
    password: {
      errorMessage: "",
    },
  });

  const inputEmail = useRef();
  const inputPassword = useRef();

  const getValueInput = (name) => {
    switch (name) {
      case "email":
        return inputEmail.current.value;
      case "password":
        return inputPassword.current.value;
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
  };

  const handleInputValidate = (e) => {
    const { name } = e.target;
    const { errorMessage } = validateInput(name, getValueInput(name));
    const newState = { ...stateInput[name] };
    newState.errorMessage = errorMessage;
    setStateInput({ ...stateInput, [name]: newState });
  };

  const handleValidationSubmit = () => {
    if (
      stateInput.password.errorMessage !== "" ||
      stateInput.email.errorMessage !== "" ||
      inputPassword.current.value === "" ||
      inputEmail.current.value === ""
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await !handleValidationSubmit()) {
      return NotificationManager.warning("Warning message", t("login.format"));
    } else {
      callApi(`users?email=${inputEmail.current.value}`, "Get", null).then(
        (res) => {
          if (
            res.data[0] &&
            res.data[0].password === inputPassword.current.value &&
            res.data[0].role === "menber"
          ) {
            localStorage.setItem(
              "Token",
              JSON.stringify({
                ...res.data[0],
                password: "******",
                role: "***",
              })
            );
            NotificationManager.success("Success message", t("login.success"));
            dispatchLogin(actLogin());
          } else {
            NotificationManager.error("Error message", t("login.err"));
          }
        }
      );
    }
  };

  if (loggedIn || localStorage.getItem("Token") !== null) {
    console.log("props.history :>> ", props.history);
    props.history.length <= 2
      ? props.history.push("/")
      : props.history.goBack();
    return null;
  }

  return (
    <main>
      <section className="login" style={{ minHeight: "500px" }}>
        <div className="box">
          <div className="login__content">
            <div className="login__content__title title-content btn-form">
              <h1 style={{ textShadow: "-2px 2px 2px rgba(229,229,229,0.74)" }}>
                {t("login.h1")}
              </h1>
              <div className="login__content__title__btn btn-form">
                <button
                  style={{ boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" }}
                >
                  {t("login.btn-register")}
                </button>
              </div>
            </div>
            <div className="login__content__form form">
              <form onSubmit={handleSubmit}>
                <div className="login__content__form__title">
                  <h3
                    style={{
                      textShadow: "-2px 2px 2px rgba(229,229,229,0.74)",
                    }}
                  >
                    {t("login.h3")}
                  </h3>
                  <p>{t("login.p")}</p>
                </div>
                <div className="form-group">
                  <label>
                    {t("login.email")} <span>*</span>
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
                    {t("login.password")} <span>*</span>
                  </label>
                  <input
                    type="password"
                    ref={inputPassword}
                    name="password"
                    onKeyUp={handleInputValidate}
                  />
                  <FormError errorMessage={stateInput.password.errorMessage} />
                </div>
                <div className="login__content__form__btn btn-form">
                  <p>{t("login.forgot-pass")}</p>
                  <button
                    style={{ boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" }}
                  >
                    {t("login.btn-login")}
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

export default withRouter(LoginPage);
