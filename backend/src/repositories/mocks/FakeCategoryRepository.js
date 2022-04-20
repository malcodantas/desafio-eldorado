const MockResponse = require('./MockResponse')

class FakeCategoryRepository {
  constructor () {
    this.categories = [{ id: 1, name: 'mockCategory 1' }, { id: 2, name: 'mockCategory 2' }]
  }

  async getAll () {
    const all = this.categories
    const allObj = []
    all.forEach(category => {
      allObj.push(category)
    })
    return allObj
  }

  async getById (id) {
    const category = await this.model.filter((category) => { return category.id === id })
    console.log(category)
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

module.exports = { FakeCategoryRepository }
