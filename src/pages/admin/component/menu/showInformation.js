import React from "react";

const customeName = {
  fontSize: "1rem",
  fontWeight: 800,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: ".05rem",
  color: "#fff",
};
const ShowInformationAdmin = (props) => {
  const { firstName, lastName } = props.adminUser;

  return (
    <>
      <img
        alt="avata"
        src={require("../../../../assets/img/avata.png")}
        style={{ width: "100%", marginTop: "20px" }}
      />
      <h5 style={customeName}>{firstName + " " + lastName}</h5>
    </>
  );
};

export default ShowInformationAdmin;
