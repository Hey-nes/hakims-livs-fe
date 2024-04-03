const express = require("express");

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
    res.status(201).json({
      newItem: {...req.body},
    });
  } catch (error) {
    console.error(err.message);
  }
};
module.exports = { getCarts, getOneItem,createNewItem };
