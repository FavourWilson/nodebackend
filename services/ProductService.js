const productModel = require('../models/product')

exports.createProduct = async (products) => {
     return await productModel.create(products);
}

exports.getAllProduct = async () => {
  return await productModel.find();
};
