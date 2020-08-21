const knex = require('knex')
const conf = require('../../knexfile')

const conn = knex(conf.development)

module.exports = conn
