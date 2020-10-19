const { create } = require('./service')
const service = require('./service')

module.exports = {
    create(req, res){
      var passwd = service.create()
      res.send(passwd)
    }
}

