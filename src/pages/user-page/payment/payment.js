import React from "react";
import { useTranslation } from "react-i18next";
import PaymentList from "../../../components/payment/paymentList";

const Payment = () => {
  const { t } = useTranslation("translation");
  return (
    <main>
      <div className="box">
        <div className="process">
          <div className="progressbar">
            <div className="page-payment">
              <span>Step 3: {t("process.stp3")}</span>
            </div>
          </div>
        </div>
      </div>
      <PaymentList />
    </main>
  );
};

export default Payment;
