import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { formCurencyVN } from "../../../common/calculation";
import callApi from "../../../common/callApi";
import BgTag from "../component/chart/bgTag";
import LineChart from "../component/chart/lineChart";

const Dashboard = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  let dateNow = new Date();

  let getDateNow = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    dateNow.getDate()
  ).getTime();

  let getMonthNow = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    1
  ).getTime();

  useEffect(() => {
    callApi(`order`, "get", null).then((res) => {
      if (res && res.status === 200 && res.data) {
        const product = [...res.data];
        const arr = [];
        product.forEach((item) =>
          item.data.forEach(async (ele) => await arr.push(ele))
        );
        setData([...arr]);
      } else {
        setData([]);
      }
    });
  }, []);

  const getBookingIndate = () => {
    if (!data || data.length === 0) return 0;
    let rs = data.filter((item) => item.time >= getDateNow);
    return rs.length;
  };

  const getRevenueflDay = () => {
    if (!data || data.length === 0) return 0;
    let rs = data
      .filter((item) => item.time >= getDateNow)
      .reduce((ac, cur) => ac + cur.total, 0);
    return formCurencyVN(rs);
  };

  const getRevenueAll = () => {
    if (!data || data.length === 0) return 0;
    let rs = data.reduce((ac, cur) => ac + cur.total, 0);
    return formCurencyVN(rs);
  };

  const getRevenueMonth = () => {
    if (!data || data.length === 0) return 0;
    let rs = data
      .filter((item) => item.time >= getMonthNow)
      .reduce((ac, cur) => ac + cur.total, 0);
    return formCurencyVN(rs);
  };

  const datatg = [
    {
      color: "#36a156",
      title: t("admin.order"),
      value: getBookingIndate(),
    },
    {
      color: "#36a156",
      title: t("admin.day"),
      value: getRevenueflDay(),
    },

    {
      color: "#36a156",
      title: t("admin.month"),
      value: getRevenueMonth(),
    },
    {
      color: "#36a156",
      title: t("admin.all"),
      value: getRevenueAll(),
    },
  ];

  return (
    <div>
      <LineChart />
      <div
        className="d-flex flex-wrap  justify-content-around"
        style={{ marginTop: "3rem" }}
      >
        {datatg.map((item, index) => {
          return <BgTag key={"dataTag" + index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
