const express = require('express');
const app = express() ; 
require('./Conn/conn');

const path = require("path");


const cors = require('cors');
app.use(cors());
const PORT = 1000 ; 
const userRouter = require('./routes/auth');
const listRouter = require('./routes/list');
app.use(express.json());
app.use('/user' , userRouter);
app.use('/list' , listRouter);
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
app.listen( PORT , () => { 
    console.log("Server Started")
})