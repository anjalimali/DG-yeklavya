
const mongoose =  require('mongoose')

const  solutionschema = new mongoose.Schema({
    Qestion:{
        type:String,
        require:true
    },
    Answer:{
        type:String,
        require:true
    },
    links:{
        type:Array,
        require:true
    },
    Group:{
        type:String,
        require:true
    },
    cretedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Solution',solutionschema)