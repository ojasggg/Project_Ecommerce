import express from "express";
import {
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  postProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/post", postProduct);
router.get("/get/:productId", getSingleProduct);
router.get("/get", getAllProduct);
router.delete("/delete/:productId", deleteProduct);
router.put("/edit/:productId", updateProduct);

export default router;
