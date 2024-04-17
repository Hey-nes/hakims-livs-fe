import React from "react";
import CartHeader from "./CartHeader";
import CartProducts from "./CartProducts";
import CartPrice from "./CartPrice";
import Footer from "../Footer";
import "../../App.css";

function Cart({ cartItems }) {
  return (
    <body>
      <CartHeader />
      <main className="cart">
        <CartProducts cartItems={cartItems} />
        <CartPrice cartItems={cartItems} />
      </main>
      <Footer />
    </body>
  );
}

export default Cart;
