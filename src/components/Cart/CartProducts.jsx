// CartProducts.jsx
import React from "react";

const CartProducts = ({ cartItems, removeFromCart }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div>No products available</div>;
  }

  const sum = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cart-products">
      <div className="cart-products-wrapper">
        <div className="products-top">
          <h2>Produkter</h2>
          <p>{sum} kr</p>
        </div>
        <div>
          <span>
            Har du ett konto <a href="">Logga in</a>
          </span>
        </div>
      </div>
      <div className="products-bottom">
        <hr />
        {cartItems.map((product) => (
          <div className="product-cart-small" key={product._id}>
            <img className="cart-img" src={product.imagePath} alt={product.title} />
            <div>
              <span>{product.title}</span>
              <span>{product.price} kr</span>
              <button onClick={() => handleRemoveFromCart(product._id)}>Ta bort</button>
            </div>
          </div>
        ))}
        <hr />
        <button>Fortsätt till checkout</button>
      </div>
    </div>
  );
};

export default CartProducts;
