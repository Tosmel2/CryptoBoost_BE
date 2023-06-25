import mongoose from "mongoose";

export const dbConnect = async () => {
  try{
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI || "mongo://127.0.0.0.1:27017/cypto");
    console.log("Database connected successfully");
  }catch(error){
    console.log(error.message);
    process.exit(1);
  }
};