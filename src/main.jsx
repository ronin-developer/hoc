import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthGuarding from "./utils/AuthGurding.jsx";

// css
import "./index.css";

// pages
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: (
          <AuthGuarding>
            <ProductsPage />
          </AuthGuarding>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
