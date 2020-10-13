import React from "react";
import { useTranslation } from "react-i18next";
import CartList from "../../../components/cart-page/cart-list";

const CartPage = () => {
  const { t } = useTranslation("translation");
  return (
    <main>
      <div className="box">
        <div className="process">
          <div className="progressbar">
            <div className="page-cart">
              <span>Step 1: {t("process.step1")}</span>
            </div>
          </div>
        </div>
      </div>
      <CartList />
    </main>
  );
};

export default CartPage;
