import mongoose from "mongoose";

import Customer from "../models/customer.model.js";

export const register = (req, res, next) => {
  const { firstName,lastName,username,email, password, phoneNumber } = req.body;
  if (!firstName || !lastName || !username || !email || !password || !phoneNumber) {
    return res.status(400).json(message: "These Fields are required");
  }
  
};
