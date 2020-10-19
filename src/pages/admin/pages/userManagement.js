import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchAdmin from "../../../common/searchAdmin";
import ItemUserMangement from "../component/user-management/userItemManagement";
import callApi from "../../../common/callApi";
import queryString from "query-string";
import PaginationAdmin from "../component/pagination/paginationAdmin";

const UserManagement = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);
  const [indexPage, setIndexPage] = useState(0);
  const [pagination, setPagination] = useState({
    _limit: 6,
    _page: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      await callApi(`users?role=menber`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          setData([...res.data]);
        } else setData([]);
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length <= 0) setDataUsers([]);
    let newData = [];
    let end =
      indexPage + pagination._limit >= data.length
        ? data.length
        : indexPage + pagination._limit;
    if (data.length === 1) setDataUsers([...data]);

    for (let i = indexPage; i < end; i++) {
      newData.push(data[i]);
    }

    setDataUsers([...newData]);
  }, [data, indexPage, pagination]);

  const handleDelete = async (id) => {
    if (id) {
      if (window.confirm(t("admin.delete?"))) {
        await callApi(`users/${id}`, "delete", null).then(async () => {
          await callApi(`users?role=menber`, "get", null).then((res) => {
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
    await callApi(`users?role=menber&${paramSearch}`, "get", null).then(
      (res) => {
        if (res && res.status === 200 && res.data) {
          setData([...res.data]);
          setPagination({ _limit: 6, _page: 1 });
          setIndexPage(0);
        } else setData([]);
      }
    );
  };

  const onChangePage = (newPage) => {
    setPagination({ ...pagination, _page: newPage });
    setIndexPage((newPage - 1) * pagination._limit);
  };

  return (
    <div className="user-management">
      <div className="card text-center">
        <h5
          className="card-header bg-secondary text-light"
          style={{ fontSize: "28px", textTransform: "uppercase" }}
        >
          <i className="fas fa-users" style={{ marginRight: "10px" }}></i>
          {t("admin.menu2")}
        </h5>
        <div className="card-body">
          <div
            className="card-search"
            style={{ float: "right", width: "30%", margin: " 20px 0" }}
          >
            <SearchAdmin onSearch={handleSearch} />
          </div>
          {dataUsers.length > 0 ? (
            <table className="table table-bordered table-striped">
              <thead>
                <tr className="bg-light">
                  <th>{t("admin.code")}</th>
                  <th>{t("admin.email")}</th>
                  <th>{t("admin.firstname")}</th>
                  <th>{t("admin.lastname")}</th>
                  <th>{t("admin.phone")}</th>
                  <th>{t("admin.action")}</th>
                </tr>
              </thead>
              <tbody>
                {dataUsers.map((item, index) => (
                  <ItemUserMangement
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
        <PaginationAdmin
          totalRows={data}
          pagination={pagination}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};

export default UserManagement;
