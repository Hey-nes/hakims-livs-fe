const mongoose = require("mongoose");

const createDatabase = async () => {
    const categorySchema = mongoose.Schema({
        name: { type: String, required: true },
    });

    const Category = mongoose.model("Category", categorySchema);

    await Category.insertMany([
        { name: "Mejeri" },
        { name: "Frukt & Grönt" },
        { name: "Bröd & Bakverk" },
    ]);

    const productSchema = mongoose.Schema({
        imagePath: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
      });
    
      const productModel = mongoose.model("products", productSchema, "products");
    
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
    await mongoose.connect(
        "mongodb+srv://gruppkval:Grupp0823@hakims-livs-cluster.npk4gwa.mongodb.net/hakims-livs-db"
    );

    await createDatabase();
    mongoose.connection.close();

    console.log("Database created successfully!");
};

run().catch((error) => console.error("Error:", error));
