// const productService = require('../services/ProductService')
const Products = require('../models/product')
const asyncHandler = require("express-async-handler");


// exports.createProduct = async (req, res) => {
//   try {
//     const product = await productService.createProduct(req.body);
//     res.json({ data: product, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const createProduct = asyncHandler(async (req, res) => {
  const { prodImage, prodPrice, prodName } = req.body;


  if (!req.body) {
    res.status(400).json({ message: "Please add all fields" });
  }
  


  const userExists = await Products.findOne({ prodName });

  if (userExists) {
    res.status(400).json({ message: "Name already exists" });
  }
  

  const user = await Products.create({
    prodImage,
    prodPrice,
    prodName,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      prodImage: user.prodImage,
      prodPrice: user.prodPrice,
      prodName: user.prodName,
      message: "Products added successfully",
    });


    
  } else {
    res.status(400).json({ message: "Invalid User Data" });
  }

});


// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await productService.getAllProduct();
//     res.json({ data: products, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

module.exports = {
  createProduct,
};