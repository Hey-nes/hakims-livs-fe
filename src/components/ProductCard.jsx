const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <h4>{product.title}</h4>
      <div className="product-picture">
        <img src={product.imagePath} alt={product.title} />
      </div>
      <div className="product-bottom">
        <p>{product.price}</p>
        <button>Köp</button>
      </div>
    </div>
  );
};

export default ProductCard;
