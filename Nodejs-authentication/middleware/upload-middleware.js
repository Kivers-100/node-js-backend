const multer = require('multer');   
const path = require('path');

// Set up multer storage configuration  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory to save uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Generate a unique filename
    }
});

//file filter function
const fileFilter = (req, file, cb) => {
    // Accept only image files (you can customize this as needed)
    if (file.mimetype.startsWith('image/')) {   
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }   
};

//multer middleware configuration
module.exports = multer({
     storage, 
     fileFilter,
     limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});


