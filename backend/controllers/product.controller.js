import Product from "../models/product.model.js";
import mongoose from "mongoose";

//controller for creating products
export const createProducts = async (req, res) => {
  const product = req.body; // user will send data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(404)
      .json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ succes: true, data: newProduct });
  } catch (error) {
    console.log(error, error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//controller for get products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // method to find all products
    res.status(201).json({ succes: true, data: products });
  } catch (error) {
    console.log(error, error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//controller for deleting products
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(201).json({ succes: true, message: `product deleted: ${id}` });
  } catch (error) {
    console.log(error, error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const updatingProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body; // user will send data for what they will update in json

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(201).json({ succes: true, data: updatedProduct });
  } catch (error) {
    console.log(error, error.message);
    res.status(404).json({ success: false, message: "request error" });
  }
};
