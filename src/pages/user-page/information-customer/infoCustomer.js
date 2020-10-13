import React from "react";
import { useTranslation } from "react-i18next";
import InfoCustomerList from "../../../components/information-customer/infoCustomerList";

const InfoCustomer = () => {
  const { t } = useTranslation("translation");
  return (
    <main>
      <section>
        <div className="box">
          <div className="process">
            <div className="progressbar">
              <div className="page-information">
                <span>Step 2: {t("process.step2")}</span>
              </div>
            </div>
          </div>
        </div>
        <InfoCustomerList />
      </section>
    </main>
  );
};

export default InfoCustomer;
