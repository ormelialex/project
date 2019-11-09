const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
    {
        id: { type: Number, required: true },
        fio: { type: String, required: true },
        avgScore: { type: Number, required: true },
        typeEducation: { type: String, required: true },
        age: { type: Number, required: true },
        hasDebt: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('students', Student)
