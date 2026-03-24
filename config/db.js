const mongoose = require("mongoose");

const connectDB = async (url) => {
  if (!url) {
    throw new Error("MongoDB URI is missing or invalid");
  }

  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
