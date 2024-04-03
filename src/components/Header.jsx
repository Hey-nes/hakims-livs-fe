const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>Hakims Livs</h1>
        <input type="text" placeholder="Sök..." />
        <i className="cart-icon"></i>
        <button>Logga in</button>
        <button className="checkout">Till kassan</button>
      </header>
    </div>
  );
};

export default Header;
