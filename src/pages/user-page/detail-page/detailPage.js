import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDataDetailRequest } from "../../../actions/actions";
import callApi from "../../../common/callApi";
import Waiting from "../../../common/waiting";
import DetailProduct from "../../../components/detail-page/detail";
import RecentlyProduct from "../../../components/detail-page/recentlyProduct";

function DetailPage(props) {
  const product = useSelector((state) => state.dataDetail);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [numberRecently, setNumberRecently] = useState([]);
  const [dataRecentlyProduct, setDataRecentlyProduct] = useState([]);
  const idProduct = props.match.params.id;

  useEffect(() => {
    if (idProduct) {
      dispatch(actFetchDataDetailRequest(idProduct));
    }
  }, [idProduct, dispatch]);

  useEffect(() => {
    if (product.length !== 0) {
      setData([...product]);
    }

    const fetData = async () => {
      await callApi("products", "get", null).then((res) => {
        if (res && res.status === 200) {
          let arrNumber = [...res.data];
          let number = arrNumber[Math.floor(arrNumber.length / 2)];
          setNumberRecently(number.view);
        } else setNumberRecently(1);
      });
    };

    fetData();
    return () => {
      setData([]);
    };
  }, [product]);

  useEffect(() => {
    const fetchDataRecently = async () => {
      await callApi(`products?view_gte=${numberRecently}`, "get", null).then(
        (res) => {
          if (res && res.status === 200) {
            setDataRecentlyProduct([...res.data]);
          } else setDataRecentlyProduct([]);
        }
      );
    };
    fetchDataRecently();
  }, [numberRecently]);

  return data.length !== 0 ? (
    <main>
      <DetailProduct data={data} />
      <RecentlyProduct dataRecentlyProduct={dataRecentlyProduct} />
    </main>
  ) : (
    <div style={{ height: "600px" }}>
      <Waiting custom={{ position: "relative", top: "100px", left: "50%" }} />
    </div>
  );
}

export default DetailPage;
