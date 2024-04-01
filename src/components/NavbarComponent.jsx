import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  // logout
  function handleLogout() {
    localStorage.removeItem("vite_user");
    
    history.push("/login");

  }

  return (
    <div className="container mx-auto bg-zinc-500/70 rounded-lg flex items-center justify-between h-16 p-4">
      <h1>Logo</h1>

      <ul className="flex items-center gap-2">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>

        {localStorage.hasOwnProperty("vite_user") ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavbarComponent;
