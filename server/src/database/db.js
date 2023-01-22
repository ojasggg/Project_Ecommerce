import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected.");
});

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});
