import React from "react";

const ProductCard = ({ products, categories }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <h4>{product.title}</h4>
          <div className="product-picture">
            <img src={product.imagePath} alt={product.title} />
          </div>
          <div className="product-bottom">
            <p>
              Kategori:{" "}
              {categories.find((cat) => cat.name === product.category)?.name}
            </p>
            <p>Om produkten: {product.description}</p>
            <p>Pris: {product.price} kr</p>
            <button>Köp</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
