const express = require("express");
const {
  createNewProduct,
  getCarts,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getCarts);
router.post("/create", createNewProduct);

module.exports = router;
