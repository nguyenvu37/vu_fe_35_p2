import React from "react";
import { useTranslation } from "react-i18next";
import getArrayFromTotalPage from "../../../../common/convertArrayPages";

function PaginationAdmin(props) {
  const { totalRows, pagination, onChangePage } = props;
  const { _limit, _page } = pagination;
  const totalPages = Math.ceil(
    parseInt(totalRows ? totalRows.length : 0) / _limit
  );

  const numberPages = getArrayFromTotalPage(totalPages);
  const { t } = useTranslation();

  function handlePageChange(newPage) {
    window.scrollTo(0, 100);
    onChangePage(newPage);
  }

  const pages = numberPages.map((item) => {
    let activePage = "";
    if (_page === item + 1) {
      activePage = "active";
    }

    return (
      <li className="paginations__item" key={item}>
        <button
          className={`paginations__item__link ${activePage}`}
          onClick={() => handlePageChange(item + 1)}
        >
          {item + 1}
        </button>
      </li>
    );
  });

  return (
    <section className="paginations">
      <ul>
        <li className="paginations__item">
          <button
            className="paginations__item__link"
            disabled={_page <= 1 ? true : false}
            onClick={() => handlePageChange(_page - 1)}
          >
            <i className="fa fa-angle-left"></i>
            {t("prev")}
          </button>
        </li>
        {pages}
        <li className="paginations__item">
          <button
            className="paginations__item__link"
            disabled={_page >= totalPages ? true : false}
            onClick={() => handlePageChange(_page + 1)}
          >
            {t("next")}
            <i className="fa fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </section>
  );
}

export default PaginationAdmin;
