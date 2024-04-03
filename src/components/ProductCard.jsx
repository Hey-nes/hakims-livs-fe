const ProductCard = () => {
  return (
    <div className="main-wrapper">
      <main className="main">
        <div className="product-wrapper">
          <div className="product-container">
            <h4>Produkt</h4>
            <div className="product-picture">
              <img src="https://source.unsplash.com/random"></img>
            </div>
            <div className="product-bottom">
              <p>39.95:-</p>
              <button>Köp</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductCard;
