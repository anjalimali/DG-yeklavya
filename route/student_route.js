
const { getStudent, postStudent, putStudent, deleteStudent } = require('../controller/student_controller')

const route = require('express').Router()

route.get('/',getStudent)

route.post('/',postStudent)

route.put('/:id',putStudent)

route.delete('/:id',deleteStudent)


module.exports = route