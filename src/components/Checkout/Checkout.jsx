const Checkout = () => {
  return (
    <div className="checkout-container">
      <div>
        <div className="checkout-header">
          <h2>Produkter</h2>
          <p className="sum-products">666kr</p>
          <button className="toggle-product-view">X</button>
        </div>
        <div className="checkout-table-head">
          <table>
            <tr className="checkout-table-row">
              <button className="delete-product">Delete</button>
              <h3 className="product-title">Product name</h3>
              <p className="product-price">10kr</p>
              <button className="product-increment">+</button>
              <button className="product-decrement">-</button>
            </tr>
          </table>
        </div>
        <button className="continue">Fortsätt</button>
        <div className="checkout-header">
          <h3>Adress</h3>
        </div>
        <div className="form-header">
          <h4>Ange din adress:</h4>
          <form action="POST">
            <input type="text" name="email" placeholder="E-post" />
            <input type="text" name="first-name" placeholder="Förnamn" />
            <input type="text" name="last-name" placeholder="Efternamn" />
            <input type="text" name="adress" placeholder="Adress" />
            <input type="number" name="post-code" placeholder="Postnummer" />
            <input type="text" name="city" placeholder="Postort" />
          </form>
          <button className="continue">Fortsätt</button>
        </div>
        <div className="checkout-header">
          <h3>Betalsätt</h3>
        </div>
        <div className="pay-method-form">
          <form action="POST">
            <input type="number" name="card-number" placeholder="Kortnummer" />
            <input
              type="number"
              name="card-expiration"
              placeholder="Giltigt till"
            />
            <input type="number" name="card-CVC" placeholder="CVC-kod" />
          </form>
        </div>
      </div>
      <div className="sum-total">
        <p className="sum-total">Summa varor: 10kr</p>
        <p>Leverans: 59kr</p>
        <p>Totalsumma: 69kr</p>
      </div>
    </div>
  );
};

export default Checkout;
