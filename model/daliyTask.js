
const mongoose = require ('mongoose')

const daliytaskschema = new mongoose.Schema({
    studentName:{
        type:String,
        require:true
    },
    taskName:{
        type:String,
        require:true
    },
    startTime:{
        type:Date,
        require:true,
    },
    endTime:{
        type:Date,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('daliytask',daliytaskschema)