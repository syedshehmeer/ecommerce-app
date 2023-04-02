const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).json({
      products: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
});

//Get individual product
// GET INDIVIDUAL (by ID)
router.get("/:prodID", (req, res) => {
  Product.findById(req.params.prodID)
    .then((result) => {
      res.status(200).json({
        product: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
// Define the POST endpoint to add new products
router.post("/add", (req, res) => {
  const newProduct = new Product({
    brand: req.body.brand,
    name: req.body.name,
    cost: req.body.cost,
    modelNo: req.body.modelNo,
    images: req.body.images,
    rating: req.body.rating,
  });

  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Product added successfully",
        product: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
