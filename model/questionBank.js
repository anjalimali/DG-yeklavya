
const mongoose = require('mongoose')

const questionbank = new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    answer:{
        type:String,
        require:true
    },
    questiontype:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    date:{
        type:Date,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('question',questionbank)