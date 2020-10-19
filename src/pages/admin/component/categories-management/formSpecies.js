import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import callApi from "../../../../common/callApi";
import { v4 as uuidv4 } from "uuid";
import { NotificationManager } from "react-notifications";

const FormSpecies = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const history = useHistory();
  const inputSpecies = useRef();

  useEffect(() => {
    const fetchData = async () => {
      await callApi(`categories`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          const dataSpecies = [...res.data];
          setData([...dataSpecies]);
        } else setData([]);
      });
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const species = inputSpecies.current.value;
    let index = data.findIndex((item) => item.species === species);

    if (index === -1) {
      let newSpecies = {
        id: uuidv4(),
        species: species,
        category: [],
      };
      await callApi(`categories`, "post", { ...newSpecies }).then(() => {
        NotificationManager.success(t("admin.add-success"));
        history.push("/admin/categories-management");
      });
    } else {
      NotificationManager.error(t("admin.err-species"));
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
          <label>{t("admin.species")}:</label>
          <input ref={inputSpecies} type="text" className="form-control" />
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

export default FormSpecies;
