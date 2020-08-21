const express = require('express')

const UserController = require('../controllers/UserController')
const GeneratorController = require('../controllers/GeneratorController')
const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('Bem vindo ao Secrypter')
})

routes.post('/user/create', UserController.create)
routes.post('/login', UserController.login)
//
routes.post('/generate', GeneratorController.create)

module.exports = routes