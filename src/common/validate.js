import i18next from "i18next";
import {
  address,
  email,
  firstname,
  fullname,
  lastname,
  password,
  phone,
} from "./constCommon";

export const validateInput = (type, checkingText, pass) => {
  if (checkingText === "") {
    return { errorMessage: i18next.t("validate.require") };
  }

  if (type === "email") {
    const regexp = email;
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
    const regexp = firstname;
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
    const regexp = lastname;
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
    const regexp = phone;
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
    const regexp = password;
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
    const regexp = fullname;
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
    const regexp = address;
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

export const getTranslationCategory = (category) => {
  switch (category) {
    case "cosmetic":
      return i18next.t("grid.category1");
    case "makeup":
      return i18next.t("grid.category2");
    case "perfume":
      return i18next.t("grid.category3");
    case "lotions":
      return i18next.t("grid.menu1_1");
    case "mask":
      return i18next.t("grid.menu1_2");
    case "cleanser":
      return i18next.t("grid.menu1_3");
    case "lipstick":
      return i18next.t("grid.menu2_1");
    case "mascara":
      return i18next.t("grid.menu2_2");
    case "blusher":
      return i18next.t("grid.menu2_3");
    default:
      return category;
  }
};
