const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: true,
      defaultValue: 0,
      validate: {     
        isDecimal: true,
        min: {
          args: [0]       
        },
        max: {
          args: [999999999]           
        }
      }
    },

    state: {
      type: DataTypes.ENUM('Cart', 'Created', 'Processing', 'Canceled', 'Complete'),
      defaultValue: 'Cart',
      allowNull: false
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }

  });
};