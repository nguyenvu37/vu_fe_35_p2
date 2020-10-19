import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getKeywordText, getKeywordId } from "../../../common/calculation";
import callApi from "../../../common/callApi";
import SearchAdmin from "../../../common/searchAdmin";
import OrderItem from "../component/order-management/orderItem";

const OrderManagement = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await callApi(`order`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          const arr = [];
          [...res.data].map((item) =>
            item.data.forEach((order) => {
              order = {
                ...order,
                username: item.fullname,
                userId: item.userId,
              };
              arr.push({ ...order });
            })
          );
          setData([...arr]);
          setOrders([...res.data]);
          setDataSearch([...arr]);
        } else {
          setData([]);
          setOrders([]);
          setDataSearch([]);
        }
      });
    };
    fetchData();
  }, []);

  const handleSearch = async (keyword) => {
    if (keyword !== "") {
      const arr = [];
      dataSearch.forEach((item) => {
        let arrId = getKeywordId(item.id);
        let arrUsername = getKeywordText(item.username);
        let arrName = getKeywordText(item.name);
        let arrStatus = getKeywordText(item.status);
        let arrKeyword = getKeywordText(keyword);
        let keywordId = getKeywordId(keyword);
        if (arrUsername.includes(arrKeyword)) arr.push(item);
        if (arrName.includes(arrKeyword)) arr.push(item);
        if (arrId.includes(keywordId)) arr.push(item);
        if (arrStatus.includes(arrKeyword)) arr.push(item);
      });

      setData([...arr]);
    } else {
      await callApi(`order`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          const arr = [];
          [...res.data].map((item) =>
            item.data.forEach((order) => {
              order = {
                ...order,
                username: item.fullname,
                userId: item.userId,
              };
              arr.push({ ...order });
            })
          );
          setData([...arr]);
        } else {
          setData([]);
        }
      });
    }
  };

  const handleDelete = async (id) => {
    if (id) {
      if (window.confirm(t("admin.delete?"))) {
        const index = data.findIndex((item) => item.id === id);
        const idUser = data[index].userId;
        const newOrders = orders.filter((item) => item.userId === idUser);
        const newData = newOrders[0].data.filter((item) => item.id !== id);

        const newValue = {
          ...newOrders[0],
          data: [...newData],
        };

        await callApi(`order/${newOrders[0].id}`, "put", { ...newValue }).then(
          () => {
            const dataDelete = data.filter((item) => item.id !== id);
            setData([...dataDelete]);
          }
        );
      }
    }
  };

  return (
    <div className="order-management">
      <div className="card text-center">
        <h5
          className="card-header bg-secondary text-light"
          style={{ fontSize: "28px", textTransform: "uppercase" }}
        >
          <i className="fas fa-users" style={{ marginRight: "10px" }}></i>
          {t("admin.menu4")}
        </h5>
        <div className="card-body">
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
                  <th>{t("admin.username")}</th>
                  <th>{t("admin.quantity")}</th>
                  <th>{t("admin.status")}</th>
                  <th>{t("admin.total")}</th>
                  <th>{t("admin.action")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <OrderItem
                    key={index + 1}
                    data={item}
                    onDeleteItem={handleDelete}
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

export default OrderManagement;
