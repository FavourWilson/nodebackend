const productService = require('../services/ProductService')

exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.json({ data: product, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProduct();
    res.json({ data: products, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};