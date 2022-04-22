const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const AuthError = require('../errors/AuthError')

function AuthHandler (request, response, next) {
  const { authorization } = request.headers
  if (authorization === null || authorization === undefined) {
    throw new AuthError('Missing Token')
  }

  const token = authorization.split(' ')[1]

  try {
    jwt.verify(token, authConfig.secreteKey, authConfig.options)
  } catch (err) {
    throw new AuthError('Invalid Token')
  }
  next()
}

module.exports = AuthHandler
