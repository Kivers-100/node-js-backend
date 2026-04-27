const express = require("express");
const app = express();  

//middleware function
const getCurrentTime = (req, res, next) => {    
    const currentTime = new Date().toISOString();
    console.log(`Current time: ${currentTime}`);
    console.log(` Get method:${req.method}, url:${req.url}`);
    
    next(); // to pass control to the next middleware or route handler
}

app.use(getCurrentTime); // to use the middleware for all routes

//route specific middleware
app.get("/",(req,res)=>{
    res.send("Home page")
})  

app.get("/about",(req,res)=>{
    res.send("About page")
})

const PORT  = 3000;
app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});