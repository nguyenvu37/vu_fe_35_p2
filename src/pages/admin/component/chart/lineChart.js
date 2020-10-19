import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import callApi from "../../../../common/callApi";
import { formCurencyVN } from "../../../../common/calculation";

const LineChart = () => {
  const { t } = useTranslation("translation");
  const [products, setProducts] = useState([]);
  let yearDefault = 2020;

  const getRevenueFlMonth = (month, year = yearDefault) => {
    if (!products || products.length === 0) return 0;

    const monthAfterHander = month === 1 ? 12 : month - 1;
    const yearAfterHander = month === 1 ? year - 1 : year;

    const timeStartMonth = new Date(
      yearAfterHander,
      monthAfterHander
    ).getTime();

    const timeEndMonth =
      monthAfterHander === 12
        ? new Date(yearAfterHander + 1, 1, 1).getTime()
        : new Date(yearAfterHander, monthAfterHander + 1, 1).getTime();

    let sumFlMonth = products
      .filter(
        (item) => item.time >= timeStartMonth && item.time <= timeEndMonth
      )
      .reduce((ac, cur) => ac + cur.total, 0);

    return sumFlMonth;
  };

  const dataChart = {
    labels: [
      t("admin.m1"),
      t("admin.m2"),
      t("admin.m3"),
      t("admin.m4"),
      t("admin.m5"),
      t("admin.m6"),
      t("admin.m7"),
      t("admin.m8"),
      t("admin.m9"),
      t("admin.m10"),
      t("admin.m11"),
      t("admin.m12"),
    ],
    datasets: [
      {
        label: t("admin.label"),
        data: [
          getRevenueFlMonth(1),
          getRevenueFlMonth(2),
          getRevenueFlMonth(3),
          getRevenueFlMonth(4),
          getRevenueFlMonth(5),
          getRevenueFlMonth(6),
          getRevenueFlMonth(7),
          getRevenueFlMonth(8),
          getRevenueFlMonth(9),
          getRevenueFlMonth(10),
          getRevenueFlMonth(11),
          getRevenueFlMonth(12),
        ],
        borderColor: ["rgba(54,162,86,0.5)"],
        backgroundColor: ["rgba(54,162,86,0.5)"],
        pointBackgroundColor: ["rgba(54,162,86,0.5)"],
        pointBorderColor: ["rgba(54,162,86,0.5)"],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
    },
    cornerRadius: 20,
    scales: {
      area: [
        {
          ticks: {
            callback: (e) => formCurencyVN(e),
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            callback: (e) => formCurencyVN(e),
          },
        },
      ],
    },
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await callApi(`order`, "get", null).then((res) => {
        if (res && res.status === 200 && res.data) {
          const product = [...res.data];
          const arr = [];
          product.forEach((item) =>
            item.data.forEach(async (ele) => await arr.push(ele))
          );
          setProducts([...arr]);
        } else {
          setProducts([]);
        }
      });
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Line data={dataChart} options={options} />
    </div>
  );
};

export default LineChart;
