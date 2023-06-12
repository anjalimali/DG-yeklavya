
const { getquestionbank,postquestionbank, putquestionbank, deletequestionbank } = require('../controller/questionBank_Controller')

const route = require('express').Router()

route.get('/',getquestionbank)

route.post('/',postquestionbank)

route.put('/:id',putquestionbank)

route.delete('/:id',deletequestionbank)

module.exports =route