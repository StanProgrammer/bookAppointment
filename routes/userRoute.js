const express=require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/user',userController.getApt)
router.use('/user/createUser',userController.create)
router.get('/user/display',userController.dispalyAll)

router.use('/user/delete',userController.deleteUser)
module.exports = router