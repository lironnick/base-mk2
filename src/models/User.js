import { Model, DataTypes } from 'sequelize'
import { hash } from 'bcryptjs'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'users',
        hooks: {
          beforeCreate: async (user) => {
            if (user.password) {
              user.password = await hash(user.password, 8)
            }
          },
          beforeUpdate: async (user) => {
            if (user.changed('password')) {
              user.password = await hash(user.password, 8)
            }
          },
        },
      }
    )
  }
}

export default User
