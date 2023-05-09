const mongoose = require('mongoose');
const prodSchema = new mongoose.Schema({
  prodName: {
    type: String,
    required: true,
  },
  prodPrice: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  prodImage: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('Products',prodSchema)