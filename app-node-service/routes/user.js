const express = require('express')
const router = express.Router()
const users = require('../stub/user.json')
router.get('/', function (req, res, next) {
  res.json(users)
})

module.exports = router