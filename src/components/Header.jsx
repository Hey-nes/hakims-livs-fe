import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ isAdminLoggedIn, setIsAdminLoggedIn }) => {
  const navigate = useNavigate();

  const handleLoginToggle = () => {
    setIsAdminLoggedIn(!isAdminLoggedIn)
  }

  return (
    <div>
      <header className="header">
        <h1>Hakims Livs</h1>
        <input type="text" placeholder="Sök..." />
        <i className="cart-icon"></i>
        <button onClick={handleLoginToggle}>Logga in admin</button>
        <button
          className="checkout"
          onClick={() => {
            navigate("./Cart");
          }}
        >
          Till kassan
        </button>
      </header>
    </div>
  );
};

export default Header;
