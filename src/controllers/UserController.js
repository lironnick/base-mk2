import User from '../models/User'

export default {
  async index(req, res) {
    const users = await User.findAll()

    return res.json(users)
  },

  async create(req, res) {
    const { name, email } = req.body

    const user = await User.create({ name, email })

    return res.json(user)
  },
}
