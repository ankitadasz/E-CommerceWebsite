import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  // useEffect(()=>{
  //   console.log("Useeffect Called")
  // },[isDark])
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
            <NavLink className="nav-link" to="/">
              MEN
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/women">
              WOMEN
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link" to="/kids">
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
      <div>
            <button onClick={toggleTheme}>{isDark ? "Light" : "Dark"}</button>
          </div>
    </header>
  );
};
