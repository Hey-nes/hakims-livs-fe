import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";

const CategoryPage = ({ categoryId, categories }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(
          `https://hakims-livs-be.vercel.app/products/category/${categoryId}`
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
          <ProductCard
            key={product._id}
            product={product}
            categories={categories}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
