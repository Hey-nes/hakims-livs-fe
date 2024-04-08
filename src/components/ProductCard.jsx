const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <h4>{product.title}</h4>
      <div className="product-picture">
        <img src={product.imagePath} alt={product.title} />
      </div>
      <div className="product-bottom">
        <p>Pris: {product.price} kr</p>
        <p>{product.description}</p>
        <button>Köp</button>
      </div>
    </div>
  );
};

export default ProductCard;
