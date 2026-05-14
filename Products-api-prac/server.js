 require("dotenv").config();
 const express = require("express");
 const connectDb = require("./database/db");
 const productsRoutes = require("./routes/routes");


 const app = express();

 //connect to data base
 connectDb();

 //middleware
 app.use(express.json());

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Connected successfully on port ${PORT}`);
})


