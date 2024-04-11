import React from "react";
import "./AdminPanel.css";

const AdminPanel = ({ products, categories }) => {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
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
              <option key={category._id} value={category.name}>{category.name}</option>
            ))}
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
