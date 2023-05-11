const express = require("express")
const {getAllProducts,createProduct} = require('../controllers/CreateProduct.js') 
const router = express.Router()
const multer = require('multer');
const Products = require("../models/product");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('prodImage'), async (req, res) => {
  try {
    // handle file upload using multer middleware

    const { prodName, prodPrice } = req.body;
    const prodImage = req.file.path;

    if (!req.body) {
      res.status(400).json({ message: "Please add all fields" });
    }
    const user = new Products({ prodImage,
      prodPrice,
      prodName, 
    });

    await user.save();

    if (user) {
      res.status(201).json({
        _id: user.id,
        prodPrice: user.prodPrice,
        prodImage: user.prodImage,
        prodName: user.prodName,
        message: "Products added successfully",
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

)


// router.get("/products", async (req, res) => {

// })

module.exports = router