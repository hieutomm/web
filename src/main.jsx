import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import BookDetail from "./presentation/components/BookDetails/Bookdetail.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./presentation/components/auth/Login.jsx";
import Register from "./presentation/components/auth/Register.jsx";
import Product from "./presentation/components/AdminPage/Product.jsx";
import AdminContent from "./presentation/components/AdminPage/AdminContent.jsx";
import Category from "./presentation/components/AdminPage/Category.jsx";
import Users from "./presentation/components/AdminPage/Users.jsx";
import Books from "./presentation/components/AdminPage/Books.jsx";
import Dashboard from "./presentation/components/AdminPage/Dashboard.jsx";
import Cart from "./presentation/components/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/book/:id",
    element: <BookDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/admin",
    element: <Product />, // Admin là layout chính
    children: [
      { path: "", element: <Books /> }, // Mặc định hiển thị danh sách sách
      { path: "/admin/add_book", element: <AdminContent /> },
      { path: "/admin/edit/:id", element: <AdminContent /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "category", element: <Category /> },
      { path: "users", element: <Users /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
