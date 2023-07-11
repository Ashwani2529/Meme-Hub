const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const mongoURI =
  "mongodb+srv://ashwanix2749:ashwani2529@cluster0.otrdlp7.mongodb.net/Users";
const connectToMongo = () => {
  mongoose.connect(mongoURI);
  console.log("mongodb connected successfully")
};
module.exports = connectToMongo;