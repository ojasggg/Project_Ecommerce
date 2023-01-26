import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import Customer from "../models/customer.model.js";
import Seller from "../models/seller.model.js";
import { createError } from "../utils/createError.js";

// Customer Authentication
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    console.log(req.body);
    const { firstName, lastName, username, phoneNumber, email } = req.body;
    const newCustomer = new Customer({
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password: hash,
    });
    await newCustomer.save();
    const { password, ...customerData } = newCustomer._doc;
    return res.status(200).json({
      message: "Registration Successful",
      customerData,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!customer) {
      return next(createError(404, "Invalid Credentials"));
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      customer.password
    );
    if (!isPasswordCorrect) {
      return next(createError(404, "Invalid Credentials"));
    }

    const token = jsonwebtoken.sign(
      { id: customer._id, userType: customer.userType },
      process.env.SECRET_KEY
    );

    const { password, userType, ...others } = customer._doc;
    console.log(others);
    return res
      .status(200)
      .json({ message: "Logged in successfully ", others, token });
  } catch (error) {
    next(error);
  }
};

//Seller Authentication
export const sellerRegister = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const { sellerName, sellerEmail, sellerContact } = req.body;
    const sellerAddress = req.body.sellerAddress;
    req.body;
    const newSeller = new Customer({
      sellerName,
      sellerEmail,
      password: hash,
      sellerContact,
      sellerAddress,
    });
    await newSeller.save();
    return res.status(200).json({
      message: "Seller Registration Successful",
      newSeller,
    });
  } catch (error) {
    next(error);
  }
};

export const sellerLogin = async (req, res, next) => {
  try {
    const seller = await Seller.findOne({
      sellerName: req.body.sellerName,
    }).select("+password");
    if (!seller) {
      next(createError(404, "Invalid Credentials"));
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      seller.password
    );
    if (!isPasswordCorrect) {
      return next(createError(404, "Invalid Credentials"));
    }

    const token = jsonwebtoken.sign({ id: seller._id }, process.env.SECRET_KEY);

    const { password, ...others } = seller._doc;
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      })
      .status(200)
      .json({ message: "Seller Logged in successfully ", ...others });
  } catch (error) {
    next(error);
  }
};
