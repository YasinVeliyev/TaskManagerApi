const Task = require("../models/Tasks")


const getTask = async (req, res)=>{
    try {
        const task = await Task.find({id:req.params.id})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({success:false,error})
    }
}

const getAllTask = async (req, res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({success:false,error})
    }
}
const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({success:true, task})
    }

    catch(error){
        res.status(500).json({success:false,error})
    }
    }

const updateTask = (req, res)=>{
    res.send('Update Task')
}

const deleteTask = (req, res)=>{
    res.send('Delete Task')
}





module.exports={
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
    getTask
}