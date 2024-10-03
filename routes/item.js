const express = require('express')
const router = express.Router()
const citem = require('../controllers/item')
const Item = require('../models/item')

router.post("/create", citem.create_item)

router.get("/read", citem.read_item)

router.put("/upd/:id", citem.up_id)

router.delete("/del/:id" , citem.delete_item)

router.get("/show_item/:id", citem.show_item)

module.exports = router