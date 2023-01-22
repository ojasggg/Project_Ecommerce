import Customer from "../models/customer.model.js";

export const getSingleCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.customerId;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer doesn't exists" });
    }
    return res
      .status(200)
      .json({ message: "Customer Details Found", customer });
  } catch (error) {
    next(error);
  }
};

export const getAllCustomer = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    return res.status(200).json({
      message: "Customers Details found",
      customers,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.customerId;
    await Customer.findByIdAndDelete(customerId);
    return res.status(200).json({ message: "Customer Deleted" });
  } catch (error) {
    next(error);
  }
};

export const updateCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.customerId;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      req.body,
      { returnDocument: "after" }
    );
    return res
      .status(200)
      .json({ message: "Customer Updated ", updatedCustomer });
  } catch (error) {
    next(error);
  }
};
