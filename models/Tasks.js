const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TaskSchema = new mongoose.Schema({
    name:{type:String,
        required:[true,'Must provide name'],
        trim:true},

    completed:{type:Boolean,
        default:false}
})
TaskSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Task', TaskSchema)