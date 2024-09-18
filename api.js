const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const rparty = require('./routes/party')
app.use('/party', rparty)

const cart = require('./routes/cart')
app.use("/cart", cart)

const item = require('./routes/item')
app.use("/item", item)

const ruser = require ('./routes/user')
app.use('/user', ruser)

app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})