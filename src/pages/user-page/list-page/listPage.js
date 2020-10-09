import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Categories from "../../../components/categories/categories";
import ShowProductList from "../../../components/list-page/showProduct";

function ListPage() {
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length !== 0) setData([...products]);
  }, [products]);

  return (
    <main>
      <section>
        <div className="box">
          <div className="list">
            <Categories />
            <ShowProductList data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListPage;
