const mongoose = require('mongoose')

const vendorschema = new mongoose.Schema({
    Vendorname:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Vendor',vendorschema)