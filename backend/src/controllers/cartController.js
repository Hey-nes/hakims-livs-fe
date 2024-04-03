const express = require("express");
const cartModel = require("../models/cart.model");


const getCarts = async (req, res) => {
  res.status(200).send("Welcome onbord, hope u can swim");
};

const getOneItem = async (req, res) => {
  const { id } = req.params;
  res.json({
    message: id,
  });
};

const createNewItem = async (req, res) => {
  if (!req.body) {
    return res.status(404).json({
      message: "New Item Not Found",
    });
  }
  try {
    const cart = new cartModel(req.body);
    await cart.save();
    res.status(201).json({
      message: "New cart created successfully!!",
      new_cart: cart,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message:"Failed to create new cart",
      error: error.message,
    })
  }
};
module.exports = { getCarts, getOneItem, createNewItem };
