const mongoose =  require('mongoose')

const  studentschema = new mongoose.Schema({
    StudentName:{
        type:String,
        require:true
    },
    StudentCollegeName:{
        type:String,
        require:true
    },
    StudentClass:{
        type:String,
        require:true
    },
    StudentEmail:{
        type:String,
        require:true
    },
    StudentMobileNo:{
        type:Number,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    creaedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports =mongoose.model('student1',studentschema)