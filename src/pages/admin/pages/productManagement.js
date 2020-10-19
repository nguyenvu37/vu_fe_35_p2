import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import callApi from "../../../common/callApi";
import SearchAdmin from "../../../common/searchAdmin";
import ProductItem from "../component/product-management/productItem";
import queryString from "query-string";
import AddProduct from "../component/product-management/addProduct";
import { useHistory } from "react-router-dom";

const ProductManagement = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await callApi(`products`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          setData([...res.data]);
        } else setData([]);
      });
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (id) {
      if (window.confirm(t("admin.delete?"))) {
        await callApi(`products/${id}`, "delete", null).then(async () => {
          await callApi(`products`, "get", null).then((res) => {
            if (res && res.status === 200 && res.data) {
              setData([...res.data]);
            } else setData([]);
          });
        });
      }
    }
  };

  const handleSearch = async (keyword) => {
    const paramSearch = queryString.stringify({ q: keyword });
    await callApi(`products?${paramSearch}`, "get", null).then((res) => {
      if (res && res.status === 200 && res.data) {
        setData([...res.data]);
      } else setData([]);
    });
  };

  const handleEdit = (id) => {
    history.push(`/admin/product-management/${id}`);
  };

  return (
    <div className="user-management">
      <div className="card text-center">
        <h5
          className="card-header bg-secondary text-light"
          style={{ fontSize: "28px", textTransform: "uppercase" }}
        >
          <i className="fas fa-users" style={{ marginRight: "10px" }}></i>
          {t("admin.menu3")}
        </h5>
        <div className="card-body">
          <div
            className="card-add"
            style={{ float: "left", width: "30%", margin: " 20px 0" }}
          >
            <AddProduct />
          </div>
          <div
            className="card-search"
            style={{ float: "right", width: "30%", margin: " 20px 0" }}
          >
            <SearchAdmin onSearch={handleSearch} />
          </div>
          {data.length > 0 ? (
            <table className="table table-bordered table-striped">
              <thead>
                <tr className="bg-light">
                  <th>{t("admin.code")}</th>
                  <th>{t("admin.discount")}</th>
                  <th>{t("admin.price")}</th>
                  <th>{t("admin.category")}</th>
                  <th>{t("admin.species")}</th>
                  <th>{t("admin.status")}</th>
                  <th>{t("admin.action")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <ProductItem
                    key={index + 1}
                    data={item}
                    onDeleteItem={handleDelete}
                    onEditItem={handleEdit}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="nothing-data">
              <h4>{t("admin.nothing")}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
