import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import Switch from "../Layout/Switch";

export const Header = () => {
   const { isDark, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="logo-container">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">ANKÉ</h1>
        </NavLink>
      </div>

      <nav>
        <ul className="list-container">
          <li>
            <NavLink className="nav-link" to="/men">
              MEN
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/women">
              WOMEN
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/accessories">
              ACCESSORIES
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/cart">
              CART
            </NavLink>
          </li>
          
        </ul>
      </nav>
    <Switch
    checked={isDark}
    onChange={toggleTheme}
    />
    </header>
  );
};
