const express = require('express')

const logController = require('../controllers/logController')

const router = express.Router()

//induces

router.get('/', logController.index)

router.get('/new', logController.new)

router.post('/', logController.create)

router.get('/:id', logController.show)


module.exports = router