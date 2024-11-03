import express from "express";
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controllers/product_controller.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Update product
router.put("/:id", updateProducts);

// Create a product
router.post("/", createProducts);

// Delete a specific product
router.delete("/:id", deleteProducts);

export default router;
