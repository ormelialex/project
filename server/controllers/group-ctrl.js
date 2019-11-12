const Group = require('../models/group/group-model')

createGroup = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a group',
        })
    }

    const group = new Group(body)

    if (!group) {
        return res.status(400).json({ success: false, error: err })
    }

    group
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                _id: group._id,
                message: 'group created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'group not created!',
            })
        })
}

updateGroup = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Group.findOne({ _id: req.params._id }, (err, group) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'group not found!',
            })
        }
        group._id = body._id
        group.direction = body.direction
        group.typeEducation = body.typeEducation
        group.course = body.course
        group.students = body.students
        group
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    _id: group._id,
                    message: 'group updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'group not updated!',
                })
            })
    })
}

deleteGroup = async (req, res) => {
    await Group.findOneAndDelete({ _id: req.params._id }, (err, group) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!group) {
            return res
                .status(404)
                .json({ success: false, error: `group not found` })
        }

        return res.status(200).json({ success: true, data: group })
    }).catch(err => console.log(err))
}

getGroupById = async (req, res) => {
    await Group.findOne({ _id: req.params._id }, (err, group) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!group) {
            return res
                .status(404)
                .json({ success: false, error: `group not found` })
        }
        return res.status(200).json({ success: true, data: group })
    }).catch(err => console.log(err))
}

getGroups = async (req, res) => {
    await Group.find({}, (err, groups) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!groups.length) {
            return res
                .status(404)
                .json({ success: false, error: `group not found` })
        }
        return res.status(200).json({ success: true, data: groups })
    }).catch(err => console.log(err))
}

module.exports = {
    createGroup,
    updateGroup,
    deleteGroup,
    getGroups,
    getGroupById,
}