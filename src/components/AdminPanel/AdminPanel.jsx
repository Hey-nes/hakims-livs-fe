import React from "react";
import "./AdminPanel.css";

const AdminPanel = ({ setIsAdminLoggedIn, products, categories, orders }) => {
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={handleLogout}>Logga ut</button>
      <h2>Lista med produkter:</h2>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <p>{product.title}</p>
          <img
            className="small-product-img"
            src={product.imagePath}
            alt={product.title}
          />
          <button>Edit product</button>
          <button>Delete product</button>
        </div>
      ))}
      <h3>Lägg till ny produkt:</h3>
      <div className="add-product">
        <form action="post">
          <input
            type="text"
            name="imagePath"
            placeholder="Länka produktbilden här"
          />
          <input
            type="text"
            name="title"
            placeholder="Skriv produktens namn här"
          />
          <input
            type="text"
            name="descriptopn"
            placeholder="Skriv produktbeskrivningen här"
          />
          <select name="category">
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </form>
        <h4>Lista med ordrar: </h4>
        {orders.map((order) => (
          <div className="order-wrapper" key={order._id}>
            <p>Ordernummer: {order.orderNumber}</p>
            <p>Datum: {order.date}</p>
            <p>Totalbelopp: {order.totalPrice} kr</p>
            <h4>Produkter:</h4>
            {order.orderItems.map((product) => (
              <div className="product">
                <p>Produktnamn: {product.name}</p>
                <p>Antal: {product.quantity}</p>
                <p>Pris per produkt: {product.price} kr</p>
                <p>Totalbelopp: {product.totalProductPrice} kr</p>
              </div>
            ))}
            <h5>Kunder: </h5>
            <div className="customer">
              <p>Förnamn: {order.customerInfo.firstName}</p>
              <p>Efternamn: {order.customerInfo.lastName}</p>
              <p>E-mail: {order.customerInfo.email}</p>
              <h5>Adress: </h5>
              <p>Gata: {order.customerInfo.address.street} {order.customerInfo.address.streetNumber}</p>
              <p>Postnummer: {order.customerInfo.address.postNumber}</p>
              <p>Stad: {order.customerInfo.address.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
