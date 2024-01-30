import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Db Connected");
  } catch (error) {
    console.error(error, "Db error");
  }
};
