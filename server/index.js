import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/customer", customerRoute);

const PORT = process.env.PORT || 90;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
