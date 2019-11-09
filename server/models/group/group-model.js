const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Group = new Schema(
    {
        id: { type: Number, required: true },
        direction: { type: String, required: true },
        typeEducation: { type: String, required: true },
        course: { type: Number, required: true },
        students: { type: [Number], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('groups', Group)
