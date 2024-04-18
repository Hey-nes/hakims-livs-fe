import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import "./components/ProductCard/ProductCard.css";
import Footer from "./components/Footer.jsx";
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";
import "./components/AdminPanel/AdminPanel.css";
import Checkout from "./components/Checkout/Checkout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import "./components/Checkout/Checkout.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    console.log("Adding to cart:", product);
  };
  

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          "https://hakims-livs-be.vercel.app/api/intro/product"
        );
        const productData = await response.json();
        setProducts(productData);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProductData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://hakims-livs-be.vercel.app/api/intro/category"
        );
        const fetchedCategories = await response.json();
        setCategories(fetchedCategories);
        console.log(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isAdminLoggedIn={isAdminLoggedIn}
              products={products}
              categories={categories}
              addToCart={addToCart} 
            />
          }
        />
        {categories.map((category) => (
          <Route
            key={category._id}
            path={`/category/${category._id}`}
            element={<CategoryPage categoryId={category._id} />}
          />
        ))}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

const HomePage = ({ isAdminLoggedIn, products, categories, addToCart }) => {
  return isAdminLoggedIn ? (
    <AdminPanel products={products} categories={categories} />
  ) : (
    <div className="app">
      <div className="navigation hidden-mobile">
        <aside className="aside">
          <nav>
            <Navigation categories={categories} />
          </nav>
        </aside>
      </div>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Hero />
          <div className="product-wrapper">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                categories={categories}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
