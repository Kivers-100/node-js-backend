const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');  
const uploadMiddleware = require('../middleware/upload-middleware');
const { uploadImageController, fetchUserImagesController} = require('../controllers/image-controller');

const router = express.Router();    

//upload the image controller
router.post('/upload', authMiddleware, adminMiddleware,uploadMiddleware.single('image'), uploadImageController);

//fetch user images controller
router.get('/images', authMiddleware,  fetchUserImagesController);

module.exports = router;
