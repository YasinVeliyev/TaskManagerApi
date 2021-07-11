
const express = require('express')
require("dotenv").config()
const app = express()
const tasks = require("./routes")
const connectDb = require("./db/connect")


//middleware
app.use(express.json())

app.get("/", (req, res)=>{
    res.send('<h1>Task Manager App</h1>')
})


app.use("/api/v1/tasks",tasks)


const start = async()=>{
    const port = 3000
    try {
        await connectDb(process.env.MONGO_URI_DEV)
        app.listen(port, console.log(`Server is listening on ${port}`))

    } catch (error) {
        console.log(error)
    }
   
}
start()
