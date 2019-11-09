const express = require('express')

const StudentsCtrl = require('../controllers/student-ctrl')

const router = express.Router()

router.post('/students', StudentsCtrl.createStudent)
router.put('/students/:id', StudentsCtrl.updateStudent)
router.delete('/students/:id', StudentsCtrl.deleteStudent)
router.get('/students/:id', StudentsCtrl.getStudentById)
router.get('/students', StudentsCtrl.getStudents)

module.exports = router
