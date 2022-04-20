class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
    this.statusCode = 400
  }
}
module.exports = MissingParamError
