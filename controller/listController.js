const List = require('../model/list')
const User = require('../model/User')
const express = require('express');


const addTask = async (req, res) => {
    const { title, body, id } = req.body;
    try {
        const existingUser = await User.findById(id);
        if (!existingUser) {
            res.status(400).json({ message: "User not found" });
        }
        else {
            const newList = new List({ title, body, user: existingUser });
            await newList.save().then(() => {
                res.status(200).json({
                    message: "Task added successfully",
                    newList: newList
                })
            });
            existingUser.list.push(newList);
            await existingUser.save();

        }
    } catch (error) {
        res.status(400).json({
            message: "Someting went wrong",
            error: error
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const { title, body, id } = req.body;
        const existingUser = await User.findById(id);
        if (existingUser) {
            const list = await List.findByIdAndUpdate(req.params.id, { title, body });
            await list.save().then(() => {
                res.status(200).json({
                    message: "Task Updated Successfully", list: list
                })
            })
        } else {
            res.status(400).json({
                message: "user not found",
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong"
        })
    }

}

const deleteTask = async(req , res) =>{
    const { id } = req.body ; 
    try {

        const existingUser = await User.findByIdAndUpdate(id, {$pull : {list : req.params.id}}) 
        if(existingUser){
            await List.findByIdAndDelete(req.params.id).then(()=>{
                res.status(200).json({
                    message : "Task deleted Successfully"
                })
            })
        }

    } catch (error) {
        res.status(400).json({
            message : "Something went wrong", 
            error : error 
        })
    }
}

const getTask= async (req , res) =>{
    try {
        const list = await List.find({user : req.params.id}).sort({ createdAt: -1 });;
        if(list.length !== 0 ){
            res.status(200).json({
                list : list
            })
        } 
        else{
            res.status(404).json({
                message : "No List"
            })
        }
        
    } catch (error) {
        res.status(404).json({
            message : "Something went wrong"
        })

        console.log(error);
    }
}
module.exports = {
    addTask: addTask,
    updateTask: updateTask,
    deleteTask : deleteTask , 
    getTask : getTask
}