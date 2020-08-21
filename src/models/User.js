import {Authenticable, Model} from 'objection';

const AuthenticatableModel = Authenticatable({
    passwordField: 'password',
    saltRounds: 12,
  })(Model);

class User extends AuthenticatableModel{
    static get tableName(){
        return 'users'
    }
}

module.exports = User