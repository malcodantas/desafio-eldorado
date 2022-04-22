class AuthError extends Error {
  constructor (message) {
    super(message)
    this.name = 'AuthError'
    this.statusCode = 404
  }
}
module.exports = AuthError
