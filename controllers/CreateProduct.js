// const productService = require('../services/ProductService')
const Products = require("../models/product");
const asyncHandler = require("express-async-handler");
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

exports.createProduct = upload.single('prodImage'), async (req, res) => {
  try {
    const { prodName, prodPrice } = req.body;
    const prodImage = req.file.path;

    // if (!req.body) {
    //   res.status(400).json({ message: "Please add all fields" });
    // }

    const user = new Products({ prodImage,
      prodPrice,
      prodName, 
    });

    await user.save();

    return res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
