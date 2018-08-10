module.exports = (sequelize, dataType) => {
  const post = sequelize.define('post', {
    title: {
      type: dataType.STRING(),
      allowNull: false
    },
    content: {
      type: dataType.TEXT(),
      allowNull: false
    },
    id: {
      type: dataType.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    }
  })

  return post
}