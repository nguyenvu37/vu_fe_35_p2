import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TranslationBtn = () => {
  const { i18n } = useTranslation("translation");
  const [en, setEn] = useState(true);
  const [vn, setVn] = useState(false);
  const handleChangeLanguage = (ln) => {
    i18n.changeLanguage(ln);
    setVn(!vn);
    setEn(!en);
  };

  let classEn = "",
    classVn = "";

  if (en) classEn = "active";

  if (vn) classVn = "active";
  return (
    <div className="btn-translate">
      <button
        className={`${classEn}`}
        onClick={() => handleChangeLanguage("en")}
      >
        En
      </button>
      <button
        className={`${classVn}`}
        onClick={() => handleChangeLanguage("vn")}
      >
        Vn
      </button>
    </div>
  );
};

export default TranslationBtn;
