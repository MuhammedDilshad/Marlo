import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["buy", "sell"],
  },
  user_id: {
    type: Number,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  shares: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
});

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;
