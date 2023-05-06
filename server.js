const express = require('express')
const app = express()
const PORT = MODE == "live" ? process.env.PORT : 5000;

const ProductRoute = require("./route/product")

app.use("/api", ProductRoute)

app.listen(PORT,() => console.log('Server is working ==> ${PORT}')) 