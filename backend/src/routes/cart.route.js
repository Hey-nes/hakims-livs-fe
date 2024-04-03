const express = require("express");
const {getCarts ,getOneItem, createNewItem} = require("../controllers/cartController");
const router = express.Router();

router.get("/", getCarts);
router.get("/:id",getOneItem );
router.post("/create",createNewItem );

module.exports = router;