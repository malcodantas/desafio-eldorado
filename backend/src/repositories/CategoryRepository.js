require('dotenv').config()

class CategoryRepository {
  base_url=process.env.BASE_URL
  constructor (category) {
    this.model = category
  }

  async getAll () {
    const all = await this.model.findAll()
    const allObj = []
    all.forEach(category => {
      category.dataValues.links = {
        endpoint: `${this.base_url}/category/${category.dataValues.id}`
      }
      allObj.push(category.dataValues)
    })
    return allObj
  }

  async getById (id) {
    const category = await this.model.findByPk(id)
    category.dataValues.links = {
      endpoint: `${this.base_url}/category/${category.dataValues.id}`
    }
    return category
  }

  async create (category) {
    const { name } = category
    const newCategory = await this.model.create({ name: name })
    return newCategory
  }

  async delete (id) {
    const deletedCategory = await this.model.destroy({
      where: { id: id }
    })
    return { deletedCategory, id }
  }

  async update (category) {
    const categoryToUpdate = await this.getById(category.id)
    const updatedCategory = categoryToUpdate.update({ ...category })
    return updatedCategory
  }
}

module.exports = CategoryRepository
