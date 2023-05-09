const express = require("express")
const bodyParser  = require('body-parser');
const router = express.Router()
const app  = express


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.post('/add', function(req,res) {
  const prod = new Products({
    prodName: req.body.prodName,
      prodPrice: req.body.prodPrice,
    prodImage: req.body.prodImage
  });
  prod.save().then(val => {
    res.json({ msg: "Products Added Successfully", val: val })
  })
})


router.get("/products", async (req, res) => {

})

module.exports = router