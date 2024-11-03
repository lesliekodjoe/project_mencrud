import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product_model.js";

dotenv.config();

const app = express();

app.use(express.json()); //For accepting json in data body


// Create a product
app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill the field" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(`Error in Creating Data ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// Delete a specific product
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch(error){
    res.status(404).json({ success: false, message: "Product not found" });
  }
});


app.get("/", (req, res) => {
  res.send("The server is running.");
});


app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
