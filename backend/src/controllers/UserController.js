const authConfig = require('../config/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AuthError= require('../shared/errors/AuthError')
class UserController {
  constructor(repository) {
    this.repository = repository
  }

  auth = async (request, response) => {
    const { username, password } = request.body
    if (username && password){

      const encryptedPassword = await bcrypt.hash(password, 10)
      const validUser = await this.repository.findOne({ 
        username, 
      })  
      
      if(validUser){
        if(await bcrypt.compare(password,validUser.dataValues.password)){
            const info = { username, data: Date.now().toString() }
            const token = jwt.sign(info, authConfig.secreteKey, authConfig.options)
            return response.status(200).json({ token })
        }
      }
      throw new AuthError('Invalid User os Password')
    }
  }
}

module.exports = {UserController}