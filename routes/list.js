const express = require('express')
const router = express.Router() ; 

const listController = require('../controller/listController')

router.post('/addTask' , listController.addTask );
router.post('/updateTask/:id' , listController.updateTask );
router.delete('/deleteTask/:id' , listController.deleteTask );
router.get('/tasks/:id' , listController.getTask );

module.exports = router ; 
