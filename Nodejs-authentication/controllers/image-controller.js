const Image = require("../models/image");
const { uploadToCloudinary } = require("../helpers/cloudinaryHelper");
const fs = require("fs");

const uploadImageController = async (req, res) => {
  try {
    //check if file is missing in req object
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // upload image to cloudinary and get url and publicId
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    // save image details to database
    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.user.userId,
    });

    await newlyUploadedImage.save();

    // delete the local file after uploading to cloudinary
    fs.unlinkSync(req.file.path);

    res.status(201).json({
      message: "Image uploaded successfully",
      image: newlyUploadedImage,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, message: "Failed to upload image" });
  }
};

//Fetch Uploaded Images Controller
const fetchUserImagesController = async (req, res) => {
  try {
    const images = await Image.find({});

    if (images) {
      res.status(200).json({ success: true, data: images });
    }
  } catch (error) {
    console.error("Error fetching user images:", error);
    res.status(500).json({ success: false, message: "Failed to fetch images" });
  }
};

module.exports = { uploadImageController, fetchUserImagesController };
