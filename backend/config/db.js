const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // In modern Mongoose versions, the connection options are no longer needed
    // as they are enabled by default.
    await mongoose.connect(process.env.MONGO_URL);
    
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    // Exit the process with a failure code if we can't connect to the DB
    process.exit(1);
  }
};

module.exports = connectDB;