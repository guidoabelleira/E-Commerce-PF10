const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.git
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Este campo es requerido'
        },
        len: {
         // args: [5, 40],
          msg: 'El nombre debe tener entre 5 y 40 caracteres'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Se requiere un precio',
        },
        isDecimal: {
          msg: 'El precio debe contener sus decimales (centavos), de ser un precio exacto puede incluir "00"'
        },
        min: {
          args: [0],
          msg: 'El precio no puede ser menor que 0,00'
        },
        max: {
          args: [999999999],
          msg: "El precio no puede contener más de 9 dígitos delante de la coma."
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Se requiere al menos un producto en stock',
        },
        isInt: {
          msg: 'El stock debe ser un número entero'
        },
        min: {
          args: [0],
          msg: 'El stock no puede ser menor a "0"'
        },
        max: {
          args: [999999999],
          msg: "El stock no puede contener más de 9 dígitos delante de la coma."
        }
      }
    },
    onStock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    onSale: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Este campo no puede estar vacío'
        },
        len: {
          //args: [20, 255],
          msg: 'La descripción debe tener entre 20 y 255 caracteres'
        }
      }
    },

  });
};
