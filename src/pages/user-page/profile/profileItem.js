import React from "react";

const ProfileItem = (props) => {
  const { data } = props;
  return (
    <tr>
      <td style={{ fontSize: "20px" }}>{data.totalProduct}</td>
      <td style={{ fontSize: "20px" }}>{data.paid}</td>
      <td style={{ fontSize: "20px" }}>{data.unpaid}</td>
      <td>
        <span className="price" style={{ fontSize: "20px" }}>
          {data.sum}
          <small>đ</small>
        </span>
      </td>
    </tr>
  );
};

export default ProfileItem;
