
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
    const category = await this.categories.filter((category) => { return category.id === id })
    if (category) {
      return category[0]
    }
    return {}
  }

  async create (category) {
    const newCategory = { ...category, id: Math.floor(Math.random() * 1000) + 2 }
    this.categories.push(newCategory)
    return newCategory
  }

  async delete (id) {
    const deletedCategory = await this.categories.filter((category) => { return category.id !== id })
    return { deletedCategory, id }
  }

  async update (category) {
    const categoryToUpdate = await this.getById(category.id)
    let updatedCategory = {}
    this.categories.forEach((categoryItem, index) => {
      if (categoryItem.id === categoryToUpdate.id) {
        this.categories[index].name = category.name
        updatedCategory = this.categories[index]
      }
    })
    return updatedCategory
  }
}

module.exports = { FakeCategoryRepository }
