import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../actions/actions";
import { withRouter } from "react-router-dom";

const ViewAll = (props) => {
  const { t } = useTranslation("translation");
  const dispatchGridPage = useDispatch();

  const handleChangeGridPage = (filter) => {
    window.scrollTo(0, 0);
    if (filter === "hot") {
      dispatchGridPage(
        actFetchProductRequest({ _limit: 6, _page: 1, hot: filter })
      );
      dispatchGridPage(actFetchTotalRowsRequest({ hot: filter }));
    }

    if (filter === "new") {
      dispatchGridPage(
        actFetchProductRequest({ _limit: 6, _page: 1, new: filter })
      );
      dispatchGridPage(actFetchTotalRowsRequest({ new: filter }));
    }

    if (filter > 0) {
      dispatchGridPage(
        actFetchProductRequest({ _limit: 6, _page: 1, view_gte: filter })
      );
      dispatchGridPage(actFetchTotalRowsRequest({ view_gte: filter }));
    }

    props.history.push("/grid");
  };
  return (
    <div className="product__view-all">
      <button onClick={() => handleChangeGridPage(props.filter)}>
        {t("hotTrend.viewAll")}
      </button>
    </div>
  );
};

export default withRouter(ViewAll);
