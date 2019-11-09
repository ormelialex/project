const express = require('express')

const GroupCtrl = require('../controllers/group-ctrl')

const router = express.Router()

router.post('/group', GroupCtrl.createGroup)
router.put('/group/:id', GroupCtrl.updateGroup)
router.delete('/group/:id', GroupCtrl.deleteGroup)
router.get('/group/:id', GroupCtrl.getGroupById)
router.get('/groups', GroupCtrl.getGroups)

module.exports = router
