const express = require("express");
const app = express();

//root route
app.get("/", (req, res) => {
  res.send("Welcome to our home page");
});

//get all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
     {
      id: 2,
      label: "Product 2",
    },
     {
      id: 1,
      label: "Product 2",
    },
  ];

  res.json(products);
});

//to get a single product
app.get("/products/:productId", (req,res)=> {
    console.log("req.params", req.params);

    const productId = parseInt(req.params.productId);

    const products = [
    {
      id: 1,
      label: "Product 1",
    },
     {
      id: 2,
      label: "Product 2",
    },
     {
      id: 1,
      label: "Product 2",
    },
  ];

  const getSingleProduct = products.find((product) => product.id === productId);

  if(getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).json({message: "Product not found"});
  }

})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
