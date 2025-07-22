const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sakshigupta8269:cNtBnshR7aSzTpRV@development.fuzvy6k.mongodb.net/Development"
  );
};

module.exports = connectDB;


