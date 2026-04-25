const express = require("express"); 
const app = express();

//application level settings
app.set("appName", "Express Tutorial");
app.set("port", 3000);
app.set("view engine", "ejs");  

//routing
app.get("/", (req,res)=>{
    res.send("Home Page");
})

// post a request
app.post("/api/data",(req,res) => {
    res.json({
        message: "Data received successfully",
        data : req.body
    })
})

// error handling
app.use((err, req, res, next) => {  
    console.error(err.stack);
    res.status(500).send("Something broke!");
}
);

//start the server
const PORT = app.get("port");
app.listen(PORT, () => {
    console.log(`${app.get("appName")} is running on port ${PORT}`);
})  