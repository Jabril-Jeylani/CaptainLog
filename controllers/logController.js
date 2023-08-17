const Log = require('../models/Logs')

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.create = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        const log = await Log.create(req.body)
        res.redirect('/logs')
        console.log(log)

    } catch (error) {
        console.log(error.message)
    }
}

module.exports.index = async (req,res) => {
    try {
        res.send('index')
    } catch (error) {
        console.log(error.message)
    }
}