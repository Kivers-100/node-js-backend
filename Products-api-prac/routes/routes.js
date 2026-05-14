const express = require("express");
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/controllers");

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id", deleteProduct);
router.post("/add", createProduct);

module.exports = router;
