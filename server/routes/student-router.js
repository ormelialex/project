const express = require('express')

const StudentsCtrl = require('../controllers/student-ctrl')

const router = express.Router()

router.post('/student', StudentsCtrl.createStudent)
router.put('/student/:id', StudentsCtrl.updateStudent)
router.delete('/student/:id', StudentsCtrl.deleteStudent)
router.get('/student/:id', StudentsCtrl.getStudentById)
router.get('/students', StudentsCtrl.getStudents)

module.exports = router
