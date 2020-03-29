const express = require('express')
const cors = require('cors')

const app = express()
const routes = require('./routes.js')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(routes)

app.listen(3333, () => {
  console.log('Server rodando')
})