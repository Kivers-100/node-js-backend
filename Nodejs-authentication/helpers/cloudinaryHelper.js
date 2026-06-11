const cloudinary  = require('../config/cloudinary');    

const uploadToCloudinary = async (filePath)=>{
     try{
     const uploadResult = await cloudinary.uploader.upload(filePath);

     return {
        url: uploadResult.secure_url,   
        publicId: uploadResult.public_id   
     };

     }catch(error){
        console.error('Error uploading to Cloudinary:', error);
        throw new Error('Failed to upload image to Cloudinary');
     }  
}

module.exports = {uploadToCloudinary}