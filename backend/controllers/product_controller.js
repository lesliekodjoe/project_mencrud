import Product from "../models/product_model.js";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    console.error(`Error in Fetching Products ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!updateData) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json({ succes: true, data: updateProduct });
  } catch (error) {
    console.log(`Error in Updating Products ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createProducts = async (req, res) => {
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
};


export const deleteProducts = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
  }
};