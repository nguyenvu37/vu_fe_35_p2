import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../../actions/actions";
import Categories from "../../../components/categories/categories";
import ShowProduct from "../../../components/grid-page/showProduct";

function GridPage(props) {
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const dispatchToTalRow = useDispatch();

  useEffect(() => {
    if (products.length !== 0) setData([...products]);
  }, [products]);

  useEffect(() => {
    dispatch(actFetchProductRequest({ _limit: 6, _page: 1 }));
    dispatchToTalRow(actFetchTotalRowsRequest({}));
  }, [dispatch, dispatchToTalRow]);

  return (
    <main>
      <section>
        <div className="box">
          <div className="grid">
            <Categories />
            <ShowProduct data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default GridPage;
