const Task = require("../models/Tasks")
const asyncWrapper = require("../middleware/async")



const getTask = async (req, res)=>{
    try {
        const task = await Task.findOne({id:req.params.id})
        if(task){
            return  res.status(200).json({task})
        }
        return res.status(404).json({success:false,msg:`No task with id :${req.params.id}`})
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

const updateTask = async (req, res)=>{
    try {
        let task = await Task.findOneAndUpdate({id:req.params.id},req.body,{new:true,runValidators:true})
        if(task){
            console.log(task)
            return res.status(201).json(task)
            
        }
        return res.status(404).json({success:false,msg:`No task with id :${req.params.id}`})
    } catch (error) {
        res.status(500).json({success:false,error})
    }
}

const deleteTask = async (req, res)=>{
    try {
        const task = await Task.findOneAndDelete({id:req.params.id})
        if(task){
            return  res.status(200).json({succes:true,task})
        }
        return res.status(404).json({success:false,msg:`No task with id :${req.params.id}`})
    } catch (error) {
        res.status(500).json({success:false,error})
    }
}


module.exports={
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
    getTask
}