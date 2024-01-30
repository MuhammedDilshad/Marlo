import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/connection.js";

const app = express();
// Routes
import TradeRoutes from "./Routes/TradeRoutes.js";

// Middleware
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("started");
});

app.use("/trades", TradeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
