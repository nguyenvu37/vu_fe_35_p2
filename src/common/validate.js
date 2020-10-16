import i18next from "i18next";

export const validateInput = (type, checkingText, pass) => {
  if (checkingText === "") {
    return { errorMessage: i18next.t("validate.require") };
  }

  if (type === "email") {
    const regexp = /\S+@\S+\.\S+/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return { errorMessage: "" };
    } else {
      return {
        errorMessage: i18next.t("validate.email"),
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
        errorMessage: i18next.t("validate.firstname"),
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
        errorMessage: i18next.t("validate.lastname"),
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
        errorMessage: i18next.t("validate.phone"),
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
        errorMessage: i18next.t("validate.password"),
      };
    }
  }

  if (type === "confirmPass") {
    const regexPass = pass;
    if (checkingText === regexPass) {
      return { errorMessage: "" };
    } else {
      return {
        errorMessage: i18next.t("validate.confirm"),
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
        errorMessage: i18next.t("validate.fullname"),
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
        errorMessage: i18next.t("validate.address"),
      };
    }
  }
};

export const getValueInput = (
  name,
  email,
  firstname,
  lastname,
  phone,
  pass,
  passConfirm,
  fullname,
  address
) => {
  switch (name) {
    case "email":
      return email.current.value;
    case "firstname":
      return firstname.current.value;
    case "lastname":
      return lastname.current.value;
    case "phone":
      return phone.current.value;
    case "password":
      return pass.current.value;
    case "confirmPass":
      return passConfirm.current.value;
    case "fullname":
      return fullname.current.value;
    case "address":
      return address.current.value;
    default:
      break;
  }
};
