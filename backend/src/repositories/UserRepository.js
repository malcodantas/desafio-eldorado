class Usermodel {
  constructor (UserModel) {
    this.model = UserModel
  }

  async list () {
    return await this.model.findAll()
  }

  async filter (filter) {
    return await this.model.findAll({ where: filter })
  }

  async findOne (filter) {
    return await this.model.findOne({ where: filter })
  }

  async add (user) {
    return await this.model.create(user)
  }

  async update (user) {
    return await user.save()
  }

  async delete (id) {
    return await this.model.destroy({
      where: {
        id
      }
    })
  }
}

module.exports = Usermodel
