const express = require('express')

const logController = require('../controllers/logController')

const router = express.Router()

//induces

router.get('/new', logController.new)

router.post('/', logController.create)

module.exports = router