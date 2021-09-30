const { DataTypes } = require("sequelize");
// Exporting the function that define the orderline model, inside connect with sequelize

module.exports = (sequelize) => {
  sequelize.define("category", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Este campo es requerido',
        },
        len: {
      //    args: [3, 30],
          msg: 'El nombre debe tener entre 3 y 30 caracteres'
        }
      }
    },
  });
};