const express = require('express')
const router = express.Router()
const ccart  = require('../controllers/cart')

router.post("/create", ccart.create_cart )

router.get("/show", ccart.show_cart)
 
router.get("/read", ccart.read_cart )
 
router.put("/update/:id", ccart.up_id)
 
router.delete("/delete/:id" , ccart.delete_cart)

module.exports = router