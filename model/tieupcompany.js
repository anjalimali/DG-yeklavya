const mongoose =  require('mongoose')

const  tieupcompanyschema = new mongoose.Schema({
    OwnerName:{
        type:String,
        require:true
    },
    tieupCompanyName:{
        type:String,
        require:true
    },
    Location:{
        type:String,
        require:true
    },
    creaedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports =mongoose.model('tieupcompany',tieupcompanyschema)