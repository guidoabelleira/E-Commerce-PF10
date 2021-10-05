const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Este campo es requerido'
          },
          len: {
            //args: [10, 255],
            msg: 'La descripción debe tener entre 10 y 255 caracteres'
          }
        }
      },
      rating:{
          type: DataTypes.ENUM,
          defaultValue: "5",
          values: ["1","2","3","4","5"]
      }
  });
};