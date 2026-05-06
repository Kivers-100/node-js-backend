const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dubekivers_db_user:Kivers%23100@cluster0.hmjyl1t.mongodb.net/",
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//Create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //create a new document

    /*const newUser = await User.create({
     name: "Fortune Mpofu",
    email: "mpofufortune@gmail.com",
      age: 40,
      isActive: false,
      tags: ["Designer"],
    });
    */

    /*
   const newUser = new User({
      name: "Lana Dube",
      email: "lana@gmail.com",
      age: 28,
      isActive: true,
      tags: ["Full-Stack Developer", "Designer"]
      
    });

    await newUser.save();
    */

    //console.log("New user created:", newUser);
    //const allUsers = await User.find({});
    //console.log(allUsers);

    //const getUsersOfActiveFalse = await User.find({ isActive: true });
    //console.log(getUsersOfActiveFalse);

    //const getFortune = await User.findOne({ name: "Fortune Mpofu" });
    //console.log(getFortune);

    const newUser = await User.create({
      name: "Updated User",
      email: "updateduser@gmail.com",
      age: 23,
      isActive: true,
      tags: ["Software Engineer"],
    });

    //const getLastCreatedUserByUserId = await User.findById(newUser._id);
    //console.log("Last created user by ID:", getLastCreatedUserByUserId);

    //const getSelectedFields = await User.find().select("name email -_id");
    //console.log("Selected fields (name and email):", getSelectedFields);

    //const getLimitedSelectedFields = await User.find().select("name email -_id").limit(5).skip(2);
    //console.log("Limited selected fields (name and email):", getLimitedSelectedFields);

    //const sortedUsers = await User.find({}).sort({age:-1});
    //console.log(sortedUsers);

    //const countDocuments = await User.countDocuments({isActive:true});
    //console.log(countDocuments);

    //const deletedUser = await User.findByIdAndDelete(newUser._id);
    //console.log("deleted user ->", deletedUser);

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      { $set: { age: 100 }, $push: { tags: "updated" } },
      { new: true },
    );
    
    console.log(" updated user ->", updatedUser);

  } catch (err) {
    console.error("Error occurred while running query examples:", err);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
