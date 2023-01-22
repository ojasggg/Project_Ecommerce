import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import { connect as db } from "./src/database/db.js";

import { authRoute, customerRoute, sellerRoute } from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/customer", customerRoute);
app.use("/api/seller", sellerRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 90;

app.listen(PORT, () => {
  db();
  console.log("Server running on port " + PORT);
});
