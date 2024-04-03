const mongoose = require("mongoose");
const { db } = mongoose.connection;

const createDatabase = async () => {
  const productSchema = mongoose.Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
  });

  const productModel = mongoose.model("products", productSchema);

  await productModel.insertMany([
    {
      imagePath: "https://source.unsplash.com/random",
      title: "Produkt 1",
      description: "Det här är produkt 1",
      category: "Kategori 1",
      price: 123,
    },
    {
      imagePath: "https://source.unsplash.com/random",
      title: "Produkt 2",
      description: "Det här är produkt 2",
      category: "Kategori 2",
      price: 456,
    },
    {
      imagePath: "https://source.unsplash.com/random",
      title: "Produkt 3",
      description: "Det här är produkt 3",
      category: "Kategori 3",
      price: 789,
    },
  ]);
};

const run = async () => {
  await mongoose.connect("mongodb://localhost:27017/hakims-livs-products");

  await createDatabase();
  mongoose.connection.close();

  console.log("Database created successfully!");
};

run().catch((error) => console.error("Error:", error));
