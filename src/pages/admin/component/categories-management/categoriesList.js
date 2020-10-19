import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NotificationManager } from "react-notifications";
import { useHistory } from "react-router-dom";
import callApi from "../../../../common/callApi";
import CategoriesItem from "./categoriesItem";

const CategoriesList = (props) => {
  const { t } = useTranslation("translation");
  const { data, dataCategories, onDeleteSpecies } = props;
  const [list, setList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const categories = data.category;
    setList([...categories]);
  }, [data]);

  const handleDeleteCategories = async (itemCategory) => {
    const newData = dataCategories.filter((item) => item.id === data.id);
    const category = newData[0].category;
    const newCategory = category.filter((item) => item !== itemCategory);
    let newCategories = {
      ...newData[0],
      category: [...newCategory],
    };

    if (window.confirm(t("admin.delete?"))) {
      await callApi(`categories/${data.id}`, "put", { ...newCategories }).then(
        () => {
          NotificationManager.success(t("admin.del-success"));
          setList([...newCategory]);
        }
      );
    }
  };

  const handlePlusCategory = (id) => {
    history.push(`/admin/categories-management/add-category/${id}`);
  };

  const handleDeleteSpecies = (id) => {
    onDeleteSpecies(id);
  };

  return (
    <div
      className="categories__content__cosmetics  text-left"
      style={{ marginLeft: "20px" }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="border-dotted"
      >
        <h2>{data.species}</h2>
        <div className="action">
          <i
            className="fas fa-minus-square"
            onClick={() => handleDeleteSpecies(data.id)}
          ></i>
          <i
            className="fas fa-plus-square"
            onClick={() => handlePlusCategory(data.id)}
          ></i>
        </div>
      </div>

      {list.length > 0
        ? list.map((item, index) => (
            <ul key={index}>
              <CategoriesItem
                data={item}
                onDeleteCategories={handleDeleteCategories}
              />
            </ul>
          ))
        : ""}
    </div>
  );
};

export default CategoriesList;
