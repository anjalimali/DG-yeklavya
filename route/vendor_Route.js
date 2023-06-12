const { getvendor, postvendor, putvendor, deletevendor }= require('../controller/vendor_Controller')


const route = require('express').Router()

route.get('/',getvendor)

route.post('/',postvendor)

route.put('/:id',putvendor)

route.delete('/:id',deletevendor)

module.exports = route