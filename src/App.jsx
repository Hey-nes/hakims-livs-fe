import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="app">
      <Header />
      <Hero />
      <Navigation />
      <main className="main">
        <div className="product-wrapper">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
