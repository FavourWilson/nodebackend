// const productService = require('../services/ProductService')
const Products = require('../models/product')
const asyncHandler = require("express-async-handler");
const upload = require('../multer');

// exports.createProduct = async (req, res) => {
//   try {
//     const product = await productService.createProduct(req.body);
//     res.json({ data: product, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


exports.createProduct = async (req, res) => {
  try {
    // handle file upload using multer middleware
    upload(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: err });
      }
      // get the data from request body and uploaded file
      const { prodName, prodPrice } = req.body;
      const prodImage = req.file;

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
      return res.status(201).json({ message: 'Product created successfully' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await productService.getAllProduct();
//     res.json({ data: products, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };