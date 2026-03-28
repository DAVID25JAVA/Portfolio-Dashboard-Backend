import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });
    await mongoose.connect(`${process.env?.MONGO_URI}/Portfolio_Dashboard`);
  } catch (error) {
    console.log("Database connection error-->", error?.message);
  }
};

export default connectDB
