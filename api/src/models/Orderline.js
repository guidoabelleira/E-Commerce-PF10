const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("orderline", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      subtotal: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: "El precio es requerido",
          },
          isDecimal: {
            msg:
              'El precio debe ser tener decimales(centavos), si es exacto favor indicar "00"',
          },
          min: {
            args: [0],
            msg: "El precio no debe ser menor a 0,00",
          },
          max: {
            args: [999999999],
            msg: "El precio no puede tener más de 9 dígitos.",
          },
        },
      },

      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: [1],
            msg: "La cantidad no puede ser menor a 1",
          },
          max: {
            args: [1000],
            msg: "La cantidad no puede ser mayor a 1000",
          },
        },
      },
    });
  };