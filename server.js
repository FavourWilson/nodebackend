const express = require('express')
const app = express()
const PORT = 5000;
const productRoute = require("./route/productRoute");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://freecoder:<password>@cluster0.pvvqq.mongodb.net/?retryWrites=true&w=majority`, 
  
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/api/products", productRoute)

app.listen(PORT,() => console.log('Server is working ==> ${PORT}')) 