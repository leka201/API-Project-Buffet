const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
app.use(express.json())

app.use(cors({origin: 'http://localhost:3000'}))

const sequelize = require('./config/database')

sequelize.authenticate().then(
    ()=>console.log("Banco conectado")
).catch(
    err => console.error("Erro bd:", err)
)

const rparty = require('./routes/party')
app.use('/party', rparty)

const cart = require('./routes/cart')
app.use("/cart", cart)

const item = require('./routes/item')
app.use("/item", item)

const ruser = require ('./routes/user')
app.use('/user', ruser)

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Run: http://localhost::${port}`);
    });
}

module.exports = app;

/*app.listen(3001, () => {
    console.log(`Run: http://localhost:${3001}`);
})
*/