import Product from "../models/product.model.js";

export const postProduct = async (req, res, next) => {
  try {
    const { productName, productDescription, price } = req.body;
    const newProduct = new Product({
      productName,
      productDescription,
      price,
    });
    await newProduct.save();
    return res.status(200).json({
      message: "Product Inserted",
      newProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    return res.status(200).json({ message: "Product found", product });
  } catch (error) {
    next(error);
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    await Product.findByIdAndDelete(productId);
    return res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    next(MediaError);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Product Updated", updatedProduct });
  } catch (error) {
    next(error);
  }
};
