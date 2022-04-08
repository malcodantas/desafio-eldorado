const CategoryRepository = require('../repositories/CategoryRepository')
const VerifyMandatoryParams = require('../shared/utils/VerifyMandatoryParams')
class CategoryController {
  async create (request, response) {
    const categoryRepository = new CategoryRepository()
    VerifyMandatoryParams(['name'], request.body)
    const { name } = request.body
    const createdCategory = await categoryRepository.create({ name })
    return response.status(201).json({ statusCode: 201, data: createdCategory })
  }

  async list (request, response) {
    const categoryRepository = new CategoryRepository()
    const allCategoriesObj = await categoryRepository.getAll()
    return response.status(200).json({ statusCode: 200, data: allCategoriesObj })
  }

  async delete (request, response) {
    const categoryRepository = new CategoryRepository()
    const id = request.params.id
    await categoryRepository.delete(id)
    return response.status(200).json({ statusCode: 200 })
  }

  async update (request, response) {
    const categoryRepository = new CategoryRepository()
    const category = {
      ...request.body,
      id: request.params.id
    }
    const updatedCategory = await categoryRepository.update(category)
    return response.status(200).json({ statusCode: 200, data: updatedCategory })
  }

  async findOne (request, response) {
    const categoryRepository = new CategoryRepository()
    const id = request.params.id
    const categoryObj = await categoryRepository.getById(id)
    return response.status(200).json({ statusCode: 200, data: categoryObj })
  }
}

module.exports = { CategoryController }
