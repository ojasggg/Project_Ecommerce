import express from "express";
import {
  deleteCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomer,
} from "../controllers/customer.controller.js";

const router = new express.Router();

router.get("/all", getAllCustomer);
router.delete("/delete/:customerId", deleteCustomer);
router.get("/get/:customerId", getSingleCustomer);
router.put("/update/:customerId", updateCustomer);

export default router;
