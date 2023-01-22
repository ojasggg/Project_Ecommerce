import express from "express";

import {
  deleteSeller,
  getAllSeller,
  getSingleSeller,
  updateSeller,
} from "../controllers/seller.controller.js";

const router = express.Router();

router.get("/get/all", getAllSeller);
router.get("/get/:sellerId", getSingleSeller);
router.delete("/delete/:sellerId", deleteSeller);
router.put("/edit/:sellerId", updateSeller);

export default router;
