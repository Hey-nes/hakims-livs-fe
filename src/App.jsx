import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Footer from "./components/Footer.jsx";
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";
import "./components/AdminPanel/AdminPanel.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);

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
    <div className="app">
      {isAdminLoggedIn ? (
        <AdminPanel products={products} categories={categories} />
      ) : null}
      <Header />
      <Hero />
      <aside className="aside">
        <nav>
          <Navigation categories={categories} />
        </nav>
      </aside>
      <main className="main">
        <div className="product-wrapper">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              products={products}
              categories={categories}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
