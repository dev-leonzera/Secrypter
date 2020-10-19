const express = require('express')
const crypto = require('crypto')
const cors = require('cors')

const app = express()
const routes = require('./components/generator/api')

app.use(cors())
app.use('/api/', routes)

module.exports = app