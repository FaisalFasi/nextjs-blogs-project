import mongoose from "mongoose";

const connect = async () => {
  // connection to mongo db:
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!!!");
  }
};

export default connect;
