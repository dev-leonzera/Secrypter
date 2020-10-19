const express = require('express')
const controller = require('./controller')
//
const routes = express.Router()
//
routes.get('/generator', controller.create)
//
module.exports = routes