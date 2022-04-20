const MissingParamError = require('../errors/MissingParamError')

const VerifyMandatoryParams = (mandatoryParams, paramsReceived) => {
  for (const field of mandatoryParams) {
    if (!paramsReceived[field]) {
      throw new MissingParamError(field)
    }
  }
}
module.exports = VerifyMandatoryParams
