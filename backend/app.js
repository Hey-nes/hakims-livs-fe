const express = require("express");
const app = express();
const productRouter = require("./src/routes/product.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/intro/product", productRouter )
module.exports = app;
