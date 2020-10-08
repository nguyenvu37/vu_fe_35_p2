export default [
  {
    title: "Home Page | Mandala",
    component: "./home-page/homePage",
    path: "/",
    isProtected: false,
  },
  {
    title: "Grid Page | Mandala",
    component: "./grid-page/gridPage",
    path: "/grid",
    isProtected: false,
  },
  {
    title: "List Page | Mandala",
    component: "./list-page/listPage",
    path: "/list",
    isProtected: false,
  },
  {
    title: "Detail Page | Mandala",
    component: "./detail-page/detailPage",
    path: "/detail/:id",
    isProtected: false,
  },
  {
    title: "Login Page | Mandala",
    component: "./login-page/loginPage",
    path: "/login",
    isProtected: false,
  },
  {
    title: "Cart Page | Mandala",
    component: "./cart-page/cartPage",
    path: "/cart",
    isProtected: true,
  },
  {
    title: "Register Page | Mandala",
    component: "./register-page/registerPage",
    path: "/register",
    isProtected: false,
  },
  {
    title: "About Page | Mandala",
    component: "./about-page/about",
    path: "/about",
    isProtected: false,
  },
  {
    title: "Not Found Page | Mandala",
    component: "./not-found/notFound",
    path: "*",
    isProtected: false,
  },
];
