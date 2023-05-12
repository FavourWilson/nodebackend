const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const PORT = 8000;
const productRoute = require("./route/productRoute");
const mongoose = require("mongoose");
const cors = require("cors");



mongoose.connect(
  `mongodb+srv://freecoder:0trYQtpyQooURumu@cluster0.pvvqq.mongodb.net/?retryWrites=true&w=majority`, 
  
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(cors());


app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute)
app.listen(PORT,() => console.log(`Server is working ==> ${PORT}`)) 