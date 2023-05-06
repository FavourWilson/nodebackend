const express = require('express')
const app = express()
const PORT = MODE == "live" ? process.env.PORT : 5000;

app.listen(PORT,() => console.log('Server is working ==> ${PORT}'))