require("dotenv").config();

const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
