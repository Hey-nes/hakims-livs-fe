import React from 'react';
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <h1>Hakims Livs</h1>
        <input type="text" placeholder="Sök..." />
        <i className="cart-icon"></i>
        <button>Logga in</button>
        <button className="checkout" onClick={() => {
          navigate("./Cart")
        }}>Till kassan</button>
      </header>
    </div>
  );
};

export default Header;
