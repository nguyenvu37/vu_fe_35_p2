import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NotificationManager } from "react-notifications";
import { useHistory } from "react-router-dom";
import callApi from "../../../common/callApi";
import CategoriesList from "../component/categories-management/categoriesList";

const CategoriesManagement = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await callApi(`categories`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          const data = [...res.data];
          setData([...data]);
        } else setData([]);
      });
    };
    fetchData();
  }, []);

  const handleAddSpecies = () => {
    history.push("/admin/categories-management/add-species");
  };

  const onDeleteSpecies = async (id) => {
    console.log("id :>> ", id);
    if (window.confirm(t("admin.delete?"))) {
      await callApi(`categories/${id}`, "delete", null).then(async () => {
        NotificationManager.success(t("admin.del-success"));
        await callApi(`categories`, "get", null).then((res) => {
          if (res && res.status === 200 && res.data) {
            const data = [...res.data];
            setData([...data]);
          } else setData([]);
        });
      });
    }
  };

  return (
    <div className="categories-management">
      <div className="card text-center">
        <h5
          className="card-header bg-secondary text-light"
          style={{ fontSize: "28px", textTransform: "uppercase" }}
        >
          <i className="fas fa-users" style={{ marginRight: "10px" }}></i>
          {t("admin.menu5")}
        </h5>
        <div className="card-body">
          <div className="categories" style={{ padding: "20px 100px" }}>
            <div className="categories__content">
              <div
                className="categories__content__title border-solid"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i className="fas fa-bars"></i>
                  <h2 style={{ fontSize: "20px", marginLeft: "10px" }}>
                    {t("grid.title")}
                  </h2>
                </div>
                <div className="action">
                  <i
                    className="fas fa-plus-square"
                    onClick={handleAddSpecies}
                  ></i>
                </div>
              </div>

              {data.map((item, index) => (
                <CategoriesList
                  key={index}
                  data={item}
                  dataCategories={data}
                  onDeleteSpecies={onDeleteSpecies}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesManagement;
