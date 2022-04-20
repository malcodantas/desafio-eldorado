const { CategoryController } = require('../../controllers/CategoryController')
const { FakeCategoryRepository } = require('../../repositories/mocks/FakeCategoryRepository')
const MockExpressRequest = require('mock-express-request')
const MockExpressResponse = require('mock-express-response')

describe('categoryRoutes', () => {
  let categoryController
  let fakeCategoryRepository
  beforeEach(() => {
    fakeCategoryRepository = new FakeCategoryRepository()
    categoryController = new CategoryController(fakeCategoryRepository)
  })
  it('should be able to list categories', () => {
    const response = new MockExpressResponse()
    const request = new MockExpressRequest()
    const categoriesPromise = categoryController.list(request, response)
    let responseObj = {}
    categoriesPromise.then((response) => {
      responseObj = response._getJSON()
      expect(responseObj.statusCode).toBe(200)
      expect(responseObj.data).toEqual([{ id: 1, name: 'mockCategory 1' }, { id: 2, name: 'mockCategory 2' }])
    }).catch((error) => { console.error(error) })
  })
  it('Should be able to create a category', () => {})
})
