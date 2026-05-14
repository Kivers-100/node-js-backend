const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://dubekivers_db_user:Kivers%231000@cluster2.wjvm2zy.mongodb.net/")
    console.log("mongodb is connected successful !");
  } catch (error) {
    console.error("Mongodb connection faiil", error);
    process.exit(1)
  }
}

module.exports = connectToDb;