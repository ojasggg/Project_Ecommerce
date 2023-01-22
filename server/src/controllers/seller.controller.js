import Seller from "../models/seller.model";

export const getAllSeller = async (req, res, next) => {
  try {
    const sellers = await Seller.find();
    return res.status(200).json({
      message: "All Seller data received.",
      sellers,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleSeller = async (req, res, next) => {
  try {
    const sellerId = req.params.sellerId;
    const seller = await Seller.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ message: "Something went wrong!" });
    }
    return res.status(200).json({ seller });
  } catch (error) {
    next(error);
  }
};

export const deleteSeller = async (req, res, next) => {
  try {
    const sellerId = req.params.sellerId;
    await Seller.findByIdAndDelete(sellerId);
    return res.status(200).json({ message: "Seller Deleted." });
  } catch (error) {
    next(error);
  }
};

export const updateSeller = async (req, res, next) => {
  try {
    const sellerId = req.params.Id;
    const updatedSeller = await Seller.findByIdAndUpdate(sellerId, req.body, {
      returnDocument: "after",
    });
    return res.status(200).json({ message: "Seller Updated", updatedSeller });
  } catch (error) {
    next(error);
  }
};
