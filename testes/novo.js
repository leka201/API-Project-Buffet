const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get("/", (req, res)=>{
    return res.status(200).json("Hello")
})

app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})
   