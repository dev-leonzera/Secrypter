const crypto = require('crypto')
const conn = require('../db/index')

module.exports = {

  async index(req, res) {
    const ongs = await conn('ongs').select('*')

    return res.json(ongs)
  },

  async create(req, res) {

    const passGen = crypto.randomBytes(4).toString('HEX')

    return res.json({ passGen })
  }
}