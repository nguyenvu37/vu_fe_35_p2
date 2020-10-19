export default [
  {
    title: "Admin Login | Mandala",
    component: "./pages/loginAdmin",
    path: "/admin",
    isProtected: false,
  },
  {
    title: "Admin Login | Mandala",
    component: "./pages/loginAdmin",
    path: "/admin/login",
    isProtected: false,
  },
  {
    title: "Dashboard | Mandala",
    component: "./pages/dashboard",
    path: "/admin/dashboard",
    isProtected: true,
  },
  {
    title: "User Management | Mandala",
    component: "./pages/userManagement",
    path: "/admin/user-management",
    isProtected: true,
  },
  {
    title: "Product Management | Mandala",
    component: "./pages/productManagement",
    path: "/admin/product-management",
    isProtected: true,
  },
  {
    title: "Product Management | Mandala",
    component: "./component/product-management/productForm",
    path: "/admin/product-management/add",
    isProtected: true,
  },
  {
    title: "Product Management | Mandala",
    component: "./component/product-management/productForm",
    path: "/admin/product-management/:id",
    isProtected: true,
  },
  {
    title: "List Order Management | Mandala",
    component: "./pages/orderManagement",
    path: "/admin/order-management",
    isProtected: true,
  },
  {
    title: "Categories Management | Mandala",
    component: "./pages/categoriesManagement",
    path: "/admin/categories-management",
    isProtected: true,
  },
  {
    title: "Categories Management | Mandala",
    component: "./component/categories-management/formSpecies",
    path: "/admin/categories-management/add-species",
    isProtected: true,
  },
  {
    title: "Categories Management | Mandala",
    component: "./component/categories-management/formCategory",
    path: "/admin/categories-management/add-category/:id",
    isProtected: true,
  },
];
