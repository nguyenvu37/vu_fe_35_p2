import React, { useState } from "react";
import BtnClickShowMenu from "./btnMenu";
import ItemMenuAdmin from "./itemMenu";
import ShowInformationAdmin from "./showInformation";
import LogoutAdmin from "./logOut";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

const timeMove = 0.8;
const divBackend = {
  width: "300px",
  height: "100%",
  transition: `${timeMove}s all`,
};

const divBackendMenuHiden = {
  width: "0",
  height: "0%",
  transition: `${timeMove}s all`,
};

const divWarpMenu = {
  position: "fixed",
  let: 0,
  top: 0,
  height: "100%",
  width: "250px",
  backgroundColor: "#88d8da",
  transition: `${timeMove}s all`,
  transform: `translate(0, 0)`,
  zIndex: 3,
};
const divWarpMenuHiden = {
  position: "fixed",
  let: 0,
  top: 0,
  height: "100%",
  width: "300px",
  backgroundColor: " #495057",
  transition: `${timeMove}s all`,
  transform: `translate(-300px, 0)`,
};

const MenuAdmin = (props) => {
  const { t } = useTranslation("translation");
  const [isShowMenu, setIsShowMenu] = useState(true);

  const dataItemMenu = [
    {
      to: "/admin/dashboard",
      text: t("admin.menu1"),
      icon: "fa-fw fa-tachometer-alt",
    },
    { to: "/admin/user-management", text: t("admin.menu2"), icon: "fa-users" },
    {
      to: "/admin/product-management",
      text: t("admin.menu3"),
      icon: "fa-globe-africa",
    },
    {
      to: "/admin/order-management",
      text: t("admin.menu4"),
      icon: "fa-calendar-check",
    },
    {
      to: "/admin/categories-management",
      text: t("admin.menu5"),
      icon: "fas fa-tasks",
    },
  ];

  const handerClickShowOffMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const adminUser = JSON.parse(localStorage.getItem("TokenAdmin"));

  return props.location.pathname === "/admin/loginAdmin" || !adminUser ? (
    ""
  ) : (
    <>
      <BtnClickShowMenu
        isShowMenu={isShowMenu}
        handerClickShowOffMenu={handerClickShowOffMenu}
      />
      <div style={isShowMenu ? divBackend : divBackendMenuHiden}></div>

      <div style={isShowMenu ? divWarpMenu : divWarpMenuHiden}>
        <div style={{ width: "100%", padding: "10px" }}>
          <div className="w-100 text-center">
            <ShowInformationAdmin adminUser={adminUser} />
            <hr
              style={{ height: "5px", borderRadius: "3px" }}
              className="bg-white"
            />
          </div>
          {dataItemMenu.map((e, i) => (
            <ItemMenuAdmin
              id={"dataItemMenu" + i}
              key={"dataItemMenu" + i}
              data={e}
            />
          ))}
        </div>
        <LogoutAdmin />
      </div>
    </>
  );
};

export default withRouter(MenuAdmin);
