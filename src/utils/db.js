import mongoose from "mongoose";
import dotenv from "dotenv";
const connect = async () => {
  // connection to mongo db:
  dotenv.config(process.env.MONGO);
  console.log(process.env.MONGO);

  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!!!");
  }
};

export default connect;
