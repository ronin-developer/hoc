import React from "react";
import { Navigate } from "react-router-dom";

function AuthGuarding({ children }) {

    // HOC
  function checkIsLogin() {
    if (localStorage.hasOwnProperty("vite_user")) {
      return localStorage.getItem("vite_user");
    }
  }

  return checkIsLogin() ? children : <Navigate to="/login" />;
}

export default AuthGuarding;
