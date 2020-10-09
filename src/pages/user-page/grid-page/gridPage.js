import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Categories from "../../../components/categories/categories";
import ShowProduct from "../../../components/grid-page/showProduct";

function GridPage() {
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    if (products.length !== 0) setData([...products]);
  }, [products]);

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
