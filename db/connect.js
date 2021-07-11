
const mongoose = require("mongoose")


const connectDb=(url)=>{
   return mongoose.connect(url,
        {useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true}
        )

}
module.exports=connectDb
    // .then(()=>console.log('Connected to the database'))
    // .catch((err)=>console.log(err))