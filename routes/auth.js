const express = require('express')
const router = express.Router() ; 

const user = require('../model/User');
const registerController = require('../controller/userController')

//signin 
router.post('/register' , registerController.register );
router.post('/signin' , registerController.signIn );

module.exports = router ; 
