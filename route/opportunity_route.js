
const { getopportunity, postopportunity, putopportunity, deleteopportunity } = require('../controller/opportunity_controller')


const route = require('express').Router()

route.get('/',getopportunity)

route.post('/',postopportunity)

route.put('/:id',putopportunity)

route.delete('/:id',deleteopportunity)

module.exports = route