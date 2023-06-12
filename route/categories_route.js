
const { getcategories, postcategories, putcategories, deletecategories } = require('../controller/categories_Controller')

const route = require('express').Router()

route.get('/',getcategories)

route.post('/',postcategories)

route.put('/:id',putcategories)

route.delete('/:id',deletecategories)

module.exports = route