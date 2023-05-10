const express = require('express')
const app = express()
const PORT = 8000;
const productRoute = require("./route/productRoute");
const mongoose = require("mongoose");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8081"
};

mongoose.connection(
  `mongodb+srv://freecoder:<MmEj7UZ6n25VfvYI>@cluster0.pvvqq.mongodb.net/?retryWrites=true&w=majority`, 
  
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/api/products", productRoute)
app.use(cors(corsOptions));
app.listen(PORT,() => console.log('Server is working ==> ${PORT}')) 