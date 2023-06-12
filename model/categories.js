
const mongoose = require('mongoose')

const categoriesschema = new mongoose.Schema({
    categoriesname:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('categories',categoriesschema)