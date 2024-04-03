const express = require("express");
const app = express();
const cartRouter = require("./src/routes/cart.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/intro/cart", cartRouter )
module.exports = app;
