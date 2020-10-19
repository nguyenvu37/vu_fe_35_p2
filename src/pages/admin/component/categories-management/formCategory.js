import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NotificationManager } from "react-notifications";
import { useHistory, useParams } from "react-router-dom";
import callApi from "../../../../common/callApi";

const FormCategory = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const history = useHistory();
  const params = useParams();
  const inputCategory = useRef();

  useEffect(() => {
    const fetchData = async () => {
      await callApi(`categories?id=${params.id}`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          const dataCategory = [...res.data][0].category;
          setDataCategories([...res.data]);
          setData([...dataCategory]);
        } else {
          setData([]);
          setDataCategories([]);
        }
      });
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = inputCategory.current.value;
    let index = data.findIndex((item) => item === category);
    if (index === -1) {
      const newData = [...data, category];

      await callApi(`categories/${params.id}`, "put", {
        ...dataCategories[0],
        category: newData,
      }).then(() => {
        NotificationManager.success(t("admin.add-success"));
        history.push("/admin/categories-management");
      });
    } else {
      NotificationManager.error(t("admin.err-category"));
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
          {t("admin.add-category")}
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{t("admin.category")}:</label>
          <input ref={inputCategory} type="text" className="form-control" />
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

export default FormCategory;
