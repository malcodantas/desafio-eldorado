class ServerError extends Error {
  constructor () {
    super('Internal Server Error')
    this.name = 'ServerError'
    this.statusCode = 500
  }
}
module.exports = ServerError
