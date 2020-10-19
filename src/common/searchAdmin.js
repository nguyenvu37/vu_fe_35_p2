import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

const SearchAdmin = (props) => {
  const { t } = useTranslation("translation");
  const { onSearch } = props;
  const inputSearch = useRef();

  const handleSearch = () => {
    let keyword = inputSearch.current.value;
    onSearch(keyword);
  };

  return (
    <div className="d-flex">
      <span className="btn" style={{ transform: "translate(39px, 0)" }}>
        <i className="fas fa-search"></i>
      </span>
      <input
        className="form-control pl-5"
        type="search"
        placeholder={t("admin.search")}
        ref={inputSearch}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default SearchAdmin;
