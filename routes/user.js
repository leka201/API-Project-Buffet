const express = require('express')
const router = express.Router()
const cuser = require('../controllers/user')

router.post("/create", cuser.create_users)

router.get("/read", cuser.read_users)
    
router.put("/upt/:id", cuser.update_user)

router.delete("/del/:id",cuser.delete_user)

router.get("/show/:id", cuser.show_user)
   

module.exports = router