const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');

router.get('/welcome',authMiddleware,(req,res)=>{
    const userInfo = req.user; // Access the decoded user information from the request object
    console.log('Decoded User Information:', userInfo); // Log the decoded user information for debugging purposes
    res.json({ success: true, message: 'Welcome to the home page', userInfo });
});

module.exports = router;
