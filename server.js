const express = require('express')
const app = express()
const PORT = 5000;

const ProductRoute = require("./route/product")


mongoose.connect(
  `mongodb+srv://freecoder:<password>@cluster0.pvvqq.mongodb.net/?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/api", ProductRoute)

app.listen(PORT,() => console.log('Server is working ==> ${PORT}')) 