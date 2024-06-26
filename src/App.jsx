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
import CategoryPage from "./components/CategoryPage/CategoryPage.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

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

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://hakims-livs-be.vercel.app/orders"
        );
        const fetchedOrders = await response.json();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item._id !== productId)
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isAdminLoggedIn={isAdminLoggedIn}
              setIsAdminLoggedIn={setIsAdminLoggedIn}
              products={products}
              categories={categories}
              orders={orders}
              addToCart={addToCart}
            />
          }
        />
        {categories.map((category) => (
          <Route
            key={category._id}
            path={`/category/${category._id}`}
            element={
              <CategoryPage categoryId={category._id} categories={categories} />
            }
          />
        ))}
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const HomePage = ({
  isAdminLoggedIn,
  setIsAdminLoggedIn,
  products,
  categories,
  orders,
  addToCart,
}) => {
  return isAdminLoggedIn ? (
    <AdminPanel
      setIsAdminLoggedIn={setIsAdminLoggedIn}
      products={products}
      categories={categories}
      orders={orders}
    />
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
        <Header
          isAdminLoggedIn={isAdminLoggedIn}
          setIsAdminLoggedIn={setIsAdminLoggedIn}
        />
        <main className="main">
          <Hero />
          <div className="product-wrapper">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                categories={categories}
                addToCart={addToCart}
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
