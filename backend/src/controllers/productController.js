const express = require("express");
const productModel = require("../models/product.model");

const getCarts = async (req, res) => {
    res.status(200).send("Welcome onbord, hope u can swim");
  };

const createNewProduct = async (req, res) => {
  if (!req.body) {
    return res.status(404).json({
      message: "New Product Not Found",
    });
  }
  try {
    const product = new productModel(req.body);
    await product.save();
    res.status(201).json({
      message: "New product created successfully!!",
      new_product: product,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Failed to create new product",
      error: error.message,
    });
  }
};
module.exports = { createNewProduct, getCarts} ;
