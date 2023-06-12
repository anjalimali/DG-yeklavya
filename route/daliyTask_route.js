
const { getdaliytask, postdaliytask, putdaliytask, deletedaliytask } = require('../controller/daliyTask_controller')

const route = require('express').Router()

route.get('/',getdaliytask)

route.post('/',postdaliytask)

route.put('/:id',putdaliytask)

route.delete('/:id',deletedaliytask)

module.exports = route