import "./Header.css";
import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  return (
    <header className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="Namaste Swiggy Logo" />
      </div>
      <nav className="nav-items">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              setButtonText(buttonText === "Login" ? "Logout" : "Login")
            }
          >
            {buttonText}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
