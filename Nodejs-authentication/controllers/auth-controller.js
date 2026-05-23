const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//register controller
const registerUser = async (req, res) => {
  try {
    //extract user information from our request body
    const { userName, email, password, role } = req.body;

    //check if the user exists in our database
    const checkExistingUser = await User.findOne({
      $or: [{ userName }, { email }],
    });

    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User already exist either with same userName or email. Please try with a different username or email",
      });
    }

    //hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user and save in your database
    const newlyCreatedUser = new User({
      userName,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newlyCreatedUser.save();

    if (newlyCreatedUser) {
      res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to register! user please try again",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//login controller
const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    //check if the user exist in the database or not
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exists!",
      });
    }

    //check if the password is correct or not
    const isPasswordMacth = await bcrypt.compare(password, user.password);

    if (!isPasswordMacth) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    //Create user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        userName: user.userName,
        role: user.role,
      },
      process.env.JWT_SECRET_JKEY,
      { expiresIn: "30m" },
    );

    res.status(200).json({
      success: true,
      message: "Logged in successful",
      accessToken,
    }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { loginUser, registerUser };
