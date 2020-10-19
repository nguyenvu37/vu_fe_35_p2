import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const AddProduct = (props) => {
  const { t } = useTranslation("translation");
  const history = useHistory();
  const handleShow = () => {
    history.push("/admin/product-management/add");
  };
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <span
          className=""
          onClick={handleShow}
          style={{ textTransform: "uppercase", cursor: "pointer" }}
        >
          <i className="fas fa-plus-square"></i> {t("admin.add")}
        </span>
      </div>
    </>
  );
};

export default AddProduct;
