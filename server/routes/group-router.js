const express = require('express')

const GroupCtrl = require('../controllers/group-ctrl')

const router = express.Router()

router.post('/group', GroupCtrl.createGroup)
router.post('/upd_group/:id', GroupCtrl.updateGroup)
router.post('/del_group/:id', GroupCtrl.deleteGroup)
router.get('/get_group/:id', GroupCtrl.getGroupById)
router.get('/groups', GroupCtrl.getGroups)

module.exports = router
