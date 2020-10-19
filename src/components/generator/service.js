const crypto = require('crypto')

module.exports = {
    create(){
        var passwd = crypto.randomBytes(5).toString('hex')
        //
        return passwd
    }
}