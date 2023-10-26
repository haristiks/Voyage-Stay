const express=require('express')
const router=express.Router()
const controller=require('../Controllers/commonController')
const TryCatch=require('../Middlewares/tryCatchMiddleware')

router.get('/isuser/:mobile',controller.isUser)

module.exports=router;