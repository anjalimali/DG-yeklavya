
const mongoose =  require('mongoose')

const  opportunityschema = new mongoose.Schema({
    JobName:{
        type:String,
        require:true
    },
    CompanyName:{
        type:String,
        require:true
    },
    Location:{
        type:String,
        require:true
    },
    Tehnology:{
        type:String,
        require:true
    },
    Date:{
        type:String,
        require:true
    },
    cretedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('opportunity',opportunityschema)