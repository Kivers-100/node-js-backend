
const express = require("express");
const app = express();

//middleware function
const myFirstMiddleware =  (req,res,next) => {
    console.log("this first middleware will run on every request");

    next(); // to pass control to the next middleware or route handler
    
}

app.use(myFirstMiddleware); // to use the middleware for all routes

//route specific middleware
app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

const PORT  = 3000;

app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});