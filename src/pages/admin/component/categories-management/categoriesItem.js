import React from "react";

const CategoriesItem = (props) => {
  const { data, onDeleteCategories } = props;

  const handleDelete = (data) => {
    onDeleteCategories(data);
  };
  return (
    <li
      className="border-dotted"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{data}</span>
      <div className="action">
        <i
          className="fas fa-minus-square"
          onClick={() => handleDelete(data)}
        ></i>
      </div>
    </li>
  );
};

export default CategoriesItem;
