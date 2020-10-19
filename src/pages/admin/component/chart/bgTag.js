import React from "react";

const BgTag = (props) => {
  const { color, title, value } = props.data;

  const divWarpTag = {
    height: "100px",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    padding: "20px",
  };

  const tagName = {
    fontSize: ".7rem",
    color: color,
    fontWeight: 700,
    textTransform: " uppercase",
  };
  const layoutDiv = {
    width: "360px",
    paddingTop: "1rem",
  };

  const rowCus = {
    alignItems: "center",
  };

  return (
    <div style={layoutDiv}>
      <div style={divWarpTag} className="shadow">
        <div style={rowCus} className="row">
          <div className="text-center">
            <div style={tagName}>{title}</div>
            <div
              style={{
                fontSize: "2.25rem",
                fontWeight: 600,
                color: "#5a5c69",
              }}
            >
              {value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgTag;
