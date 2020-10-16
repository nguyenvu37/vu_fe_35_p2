import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "../../../actions/actions";
import callApi from "../../../common/callApi";
import FormError from "../../../common/FormError";
import { getValueInput, validateInput } from "../../../common/validate";
import { withRouter } from "react-router-dom";

const Recover = (props) => {
  const { t } = useTranslation("translation");
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const [isNoneForm, setIsNoneForm] = useState("none");
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPass = useRef();
  const dispatch = useDispatch();
  const [stateInput, setStateInput] = useState({
    email: {
      errorMessage: "",
    },
    password: {
      errorMessage: "",
    },
    confirmPass: {
      errorMessage: "",
    },
  });

  const handleInputValidate = (e) => {
    const { name } = e.target;
    const { errorMessage } = validateInput(
      name,
      getValueInput(
        name,
        inputEmail,
        "",
        "",
        "",
        inputPassword,
        inputConfirmPass
      ),
      inputPassword.current.value
    );
    const newState = { ...stateInput[name] };
    newState.errorMessage = errorMessage;
    setStateInput({ ...stateInput, [name]: newState });
  };

  const handleValidationSubmit = () => {
    if (
      stateInput.password.errorMessage !== "" ||
      stateInput.email.errorMessage !== ""
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await !handleValidationSubmit()) {
      return NotificationManager.warning(t("login.format"));
    } else {
      await callApi(
        `users?email=${inputEmail.current.value}`,
        "get",
        null
      ).then((res) => {
        if (res && res.status === 200 && res.data) {
          if (res.data.length > 0) {
            NotificationManager.success(t("recover.success1"));
            setIsNoneForm("flex");
          } else {
            setIsNoneForm("none");
          }
        }
      });
    }
  };

  const handleRecoverPass = async (e) => {
    e.preventDefault();
    if (
      inputPassword.current.value === "" ||
      inputConfirmPass.current.value === ""
    ) {
      NotificationManager.warning(t("login.format"));
      return false;
    } else {
      await callApi(
        `users?email=${inputEmail.current.value}`,
        "get",
        null
      ).then((res) => {
        if (
          res.data[0] &&
          res.data[0].email === inputEmail.current.value &&
          res.data[0].role === "menber"
        ) {
          let data = {
            ...res.data[0],
            password: inputPassword.current.value,
          };
          callApi(`users/${res.data[0].id}`, "put", { ...data }).then(() => {
            localStorage.setItem(
              "Token",
              JSON.stringify({
                ...res.data[0],
                password: "******",
                role: "***",
              })
            );
            NotificationManager.success(t("recover.success2"));
            dispatch(actLogin());
            props.history.push("/");
          });
        } else {
          NotificationManager.error(t("login.err"));
        }
      });
    }
  };

  if (loggedIn || localStorage.getItem("Token") !== null) {
    props.history.push("/");
    return null;
  }

  return (
    <main>
      <div className="box">
        <div
          className="recover"
          style={{ width: "100%", marginBottom: "50px", height: "530px" }}
        >
          <div className="title-content">
            <h1 style={{ textShadow: "-2px 2px 2px rgba(229,229,229,0.74)" }}>
              {t("recover.title")}
            </h1>
          </div>
          <div
            className="form"
            style={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form style={{ width: "80%" }}>
              <div className="form-group">
                <label>{t("recover.email")}</label>
                {isNoneForm === "flex" ? (
                  <input
                    type="email"
                    ref={inputEmail}
                    name="email"
                    onKeyUp={handleInputValidate}
                    disabled
                  />
                ) : (
                  <input
                    type="email"
                    ref={inputEmail}
                    name="email"
                    onKeyUp={handleInputValidate}
                  />
                )}
                <FormError errorMessage={stateInput.email.errorMessage} />
              </div>
              <div className={`form-group ${isNoneForm}`}>
                <label>{t("recover.pass")}</label>
                <input
                  type="password"
                  ref={inputPassword}
                  name="password"
                  onKeyUp={handleInputValidate}
                />
                <FormError errorMessage={stateInput.password.errorMessage} />
              </div>
              <div className={`form-group ${isNoneForm}`}>
                <label>{t("register.confirm")}</label>
                <input
                  type="password"
                  ref={inputConfirmPass}
                  name="confirmPass"
                  onKeyUp={handleInputValidate}
                />
                <FormError errorMessage={stateInput.confirmPass.errorMessage} />
              </div>
              <div className="btn-form" style={{ marginTop: "30px" }}>
                {isNoneForm === "none" ? (
                  <button
                    type="submit"
                    style={{
                      boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)",
                      marginRight: "20px",
                    }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    {t("recover.btn-check")}
                  </button>
                ) : (
                  <button
                    type="submit"
                    style={{ boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" }}
                    onClick={(e) => handleRecoverPass(e)}
                  >
                    {t("recover.btn-send")}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withRouter(Recover);
