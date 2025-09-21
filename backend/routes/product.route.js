import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import {
  createProducts,
  deleteProduct,
  getProducts,
  updatingProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

export default router;

//posting a document
router.post("/", createProducts);

//Get all products
router.get("/", getProducts);

//Delete endpoint
router.delete("/:id", deleteProduct);

//Update Product
router.put("/:id", updatingProduct);
