const conn = require('../db/index')

module.exports = {

  async create(req, res) {
    const { name, email, login, password } = req.body

    await conn('users').insert({
      name,
      email,
      login,
      password
    })

    return res.json({ message: 'User created' })
  },

  async login(req, res) {
    const { login, password } = req.body

    const user = await conn('users')
      .where({
        'login': login,
        'password': password
      })
      .select('name')
      .first()

    if(!user){
      return res.status(400).json({ error: "Login failed"})
    }
    else{
      return res.send("Login sucessful").json()
    }
  }
}