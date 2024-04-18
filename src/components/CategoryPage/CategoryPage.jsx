import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard/ProductCard.jsx";

const CategoryPage = ({ categoryId }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(
          `https://hakims-livs-be.vercel.app/api/intro/product?category=${categoryId}`
        );
        const categoryProductsData = await response.json();
        setCategoryProducts(categoryProductsData);
      } catch (error) {
        console.error("Error fetching category products", error);
      }
    };

    fetchCategoryProducts();
  }, [categoryId]);

  return (
    <div className="category-page">
      <div className="product-wrapper">
        {categoryProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
