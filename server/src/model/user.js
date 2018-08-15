module.exports = (sequelize, dataType) => {
  const user = sequelize.define('user', {
    id: {
      type: dataType.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: dataType.STRING(16),
      primaryKey: true,
      allowNull: false
    },
    password: {
      type: dataType.STRING(64),
      allowNull: true
    },
    name: {
      type: dataType.STRING(16),
      allowNull: false
    },
    email: {
      type: dataType.STRING(32),
      allowNull: false,
      unique: true
    }
  })

  return user
}