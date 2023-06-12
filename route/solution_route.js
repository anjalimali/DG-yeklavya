
const { getsolution ,postsolution,putsolution,deletesolution} = require('../controller/solution_controller')

const route = require ('express').Router()

route.get('/',getsolution)

route.post('/',postsolution)

route.put('/:id',putsolution)

route.delete('/:id',deletesolution)

module.exports = route