const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
    {
        fio: { type: String, required: true },
        avgScore: { type: Number, required: true },
        typeEducation: { type: String, required: true },
        age: { type: Number, required: true },
        hasDebt: { type: Boolean, required: true }
    }
)

module.exports = mongoose.model('students', Student)
