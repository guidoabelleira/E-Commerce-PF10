const { DataTypes } = require("sequelize");
// Exporting the function that define the orderline model, inside connect with sequelize

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'El nombre es requerido'
        },
        len: {
          args: [3, 30],
          msg: 'El nombre debe tener entre 3 y 30 caracteres'
        },
    //    isAlpha: true
      }
    },

    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Este campo es requerido'
        },
        len: {
          args: [3, 50],
          msg: 'Este campo debe tener entre 3 y 30 caracteres'
        },
     //   isAlpha: true,
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Email es requerido'
        },
        isEmail: {
          args: true,
          msg: 'Este formato de email es inválido'
        },
        len:[5, 50]
      }
    },

    address:{
       type: DataTypes.STRING,
       allowNull: true,
       validate: {
         len: {
         args: [5, 60],
         msg: 'Este campo debe tener entre 5 y 60 caracteres.'
         }
       }
    },

    userRole: {
      type: DataTypes.ENUM("client", "admin"),
      allowNull: false,
      defaultValue: 'client',
      validate: {
        notNull: {
          msg: 'El rol del usuario debe estar definido'
        }
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Password es requerida.'
        }, 
      }
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    gRegister:{       //registro en google
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  })
};