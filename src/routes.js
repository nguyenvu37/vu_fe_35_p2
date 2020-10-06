export default [
  {
    title: "Admin | Mandala",
    component: "./pages/admin/admin",
    path: "/admin/*",
    isProtected: false,
  },
  {
    title: "Admin | Mandala",
    component: "./pages/admin/admin",
    path: "/admin",
    isProtected: false,
  },
  {
    title: "user | Mandala",
    component: "./pages/user-page/userPage",
    path: "*",
    isProtected: false,
  },
];
