const { gettieupcompany, posttieupcompany, puttieupcompany, deletetieupcompany } = require('../controller/tieupcompany_controller')


const route = require('express').Router()

route.get('/',gettieupcompany)

route.post('/',posttieupcompany)

route.put('/:id',puttieupcompany)

route.delete('/:id',deletetieupcompany)

module.exports = route