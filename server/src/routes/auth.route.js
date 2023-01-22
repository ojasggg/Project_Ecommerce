import express from "express";
import {
  login,
  register,
  sellerLogin,
  sellerRegister,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/seller/register", sellerRegister);
router.post("/seller/login", sellerLogin);

export default router;
