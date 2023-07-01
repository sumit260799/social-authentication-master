const mongoose = require("mongoose");
require("dotenv").config();

/**
 * Make connection with the mongodb database by getting the host and DB name
 * from environment variables
 */
const connectToMongoDb = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.export = connectToMongoDb;
