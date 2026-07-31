import { NavLink } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";

import { useTheme } from "../../Context/ThemeContext";
import { useAuth } from "../../Context/AuthContext";
import Switch from "../Layout/Switch";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">ANKÉ</h1>
        </NavLink>
      </div>

      {/* Navigation */}
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

      {/* Right side */}
      <div className="header-actions">
        <Switch
          checked={isDark}
          onChange={toggleTheme}
        />

        {user && (
          <div className="user-section">
            <div className="user-info">
              <div className="user-icon">
                <FiUser />
              </div>

              <span className="user-name">
                {user.name || "Account"}
              </span>
            </div>

            <button
              type="button"
              onClick={logout}
              className="logout-button"
              title="Logout"
            >
              <FiLogOut />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};