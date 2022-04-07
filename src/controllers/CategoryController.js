const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {
  async create (request, response) {
    const categoryRepository = new CategoryRepository()
    const { name } = request.body
    const createdCategory = await categoryRepository.create({ name })
    return response.json(createdCategory)
  }

  async list (request, response) {
    const categoryRepository = new CategoryRepository()
    const allCategoriesObj = await categoryRepository.getAll()
    return response.json(allCategoriesObj)
  }

  async delete (request, response) {
    const categoryRepository = new CategoryRepository()
    const id = request.params.id
    await categoryRepository.delete(id)
    return response.sendStatus(204)
  }

  async update (request, response) {
    const categoryRepository = new CategoryRepository()
    const category = {
      ...request.body,
      id: request.params.id
    }
    const updatedCategory = await categoryRepository.update(category)
    return response.json(updatedCategory)
  }

  async findOne (request, response) {
    const categoryRepository = new CategoryRepository()
    const id = request.params.id
    const categoryObj = await categoryRepository.getById(id)
    return response.json(categoryObj)
  }
}

module.exports = { CategoryController }
