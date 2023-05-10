const express = require("express")
const {getAllProducts,createProduct} = require('../controllers/CreateProduct.js') 
const router = express.Router()
const app  = express

router.route("/products").get(getAllProducts).post(createProduct);


// router.get("/products", async (req, res) => {

// })

module.exports = router