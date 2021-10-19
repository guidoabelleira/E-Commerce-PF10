const router = require('express').Router()
const {Product, Category, Image, Review, User, Order, Orderline} = require("../db.js");
const { getAllUsers, getAllUsersOrder } = require('../controllers/controllers');
const { Sequelize } = require("sequelize");
const { check, validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { DB_KEY } = process.env;

const isAdmin = require("../middleware/isAdmin");
const auth = require("../middleware/auth");

// Get todos los users
router.get("/", (req, res, next) => {
  User.findAndCountAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

// Agregar un usuario
 router.post("/", (req, res) => {
   const { name, lastname, email, address, userRole, isAdmin, password, image, newsletter  } = req.body;

   User.findOne({
     where: {
       email: email,
     },
   })
     .then((user) => {
       if (!user) {
         return User.create({
           name: name,
           lastname: lastname,
           email: email,
           address: address,  
           userRole: userRole,  
           isAdmin: isAdmin,  
           password: password,        
           image: image,
           newsletter: newsletter
         }).then(user => res.send(user))
       }
       else     return res.send(user).status(100);
     })
       .catch((err) => {
        res.send({ data: err }).status(400); 
     });
 });

// Get users ordenados por email

router.get("/byMail", async (req, res, next) => {
  try {
    const allUsersOrder = await getAllUsersOrder();
    return res.status(200).json(allUsersOrder);
  }
  catch(error) {
    next(error);
  }
})

// Get a un user por id
router.get("/oneUser/:id", async (req, res, next) => {
  const {id} = req.params;
try {
  const usersAll = await getAllUsers();
  if (id){
    let usersId = await usersAll.filter(el => el.id == id);
    usersId.length ? 
    res.status(200).json( usersId) : 
    res.json({data: {error:'No se encontró el usuario buscado'}})             
  }
 } catch(error) {
     next(error);
 }
})

//register

/* router.post(
  "/",
  [
    check("name") //validaciones de todos los campos que el usuario
      .isLength({ min: 2, max: 30 }) //tiene que llenar en el front sino sale el cartelito
      .withMessage("Nombre debe tener al menos 2 caracteres"), //rojo de que introduzca bien el campo
    check("lastname", "Lastname is empty")
      .isLength({ min: 2, max: 50 })
      .withMessage("Apellido debe tener al menos 2 caracteres"),
    check("email").isEmail().withMessage("Email inválido"),
    check("password")
      .isLength({ min: 8, max: 50 })
      .withMessage("Password debe tener al menos 8 caracteres"),
  ],
  async (req, res) => {
    //PRIMERO SE VALIDA SI SE QUIERE INGRESAR CON GOOGLE

   const { withGoogle } = req.body;
    let newGoogleUser;

    if (withGoogle === true) {
      newGoogleUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        isAdmin: req.body.isAdmin,
        password: req.body.password,
        userRole: req.body.userRole,
        image: req.body.image,
      };

      User.findOrCreate({
        where: {
          name: newGoogleUser.name,
          lastname: newGoogleUser.lastname,
          email: newGoogleUser.email,
          address: newGoogleUser.address,
          isAdmin: newGoogleUser.isAdmin,
          userRole: newGoogleUser.userRole,
          password: newGoogleUser.password,
          image: newGoogleUser.image,
          gRegister: true,
        },
      })
        .then((sendUser) => {
          let user = sendUser[0];
          jwt.sign(
            { id: user.id },
            DB_KEY,
            { expiresIn: "1d" },
            (err, token) => {
              if (err) throw err;
              res.status(200).send({
                token,
                user,
              });
            }
          );
        })

        .catch((err) => {
          return res.send(err).status(500);
        });
    } else {
      //HASTA AQUI SE CREA UN NUEVO USUARIO EN LA DB CON LOS DATOS DE GOOGLE, O SE BUSCA Y SE RETORNA CON UN JWT
      try {
        const { name, image, lastname, email, address, isAdmin, password, userRole } = req.body;

        const errors = validationResult(req); //valido todo el req body con la libreria express-validator
        if (!errors.isEmpty()) {
          // que use al principio y si hay errores me crea un array
          return res // con esos errores y los mapeo para mostrarlos en el front
            .status(400)
            .json({ errors: errors.array().map((ele) => ele.msg) });
        }

        const user = await User.findOne({ where: { email: email } });

        if (user) {
          return res.status(400).json({ errors: ["User already exists!"] }); //chequeo si un usuario ya existe para
        } // enviarle el msj de que ya existe

        const userCreate = await User.create({
          name,
          image,
          lastname,
          email, //creo el usuario con el req.body que me envian desde el front
          address,
          isAdmin,
          password,
          userRole,
        });

        const salt = await bcrypt.genSalt(10); //creo el salt para hashear la passwort, es un numero del 1 al 10
        const hashedPassword = await bcrypt.hash(password, salt); //mientras mas alto mas dificil es que me hackeen la password
        userCreate.password = hashedPassword; //piso la password que me envian en texto plano por esta hasheada

        await userCreate.save();

        jwt.sign(
          //creo el token mediante la firma
          { id: userCreate.id }, //guardo el id del usuario en el token
          DB_KEY, //la palabra secreta para hashearlo
          { expiresIn: "1d" }, //el tiempo de expiracion
          (err, token) => {
            //un callback con un error y el token
            if (err) throw err; //si hubo error muestro el error sino envio el token
            res.status(200).send({
              token, //mando el token al front y los datos del usuario
              user: {
                id: userCreate.id,
                name: userCreate.name,
                lastname: userCreate.lastname,
                email: userCreate.email,
                rol: userCreate.userRole,
              },
            });
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
); */

//Modificar usuarios
router.put("/:id", /* auth, isAdmin, */ (req, res) => {
  const { id } = req.params;
  const {name, lastname, email, address, userRole, isAdmin, password, image, newsletter, isActive } = req.body; /* <--- THE ELEMENT OF THE BODY WE ARE GOING TO USE FOR THE UPDATE */
  User.update(
    {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      address: address,
      userRole: userRole,
      isAdmin: isAdmin,
      image: image,
      newsletter: newsletter,
      isActive: isActive
    },
    { where: { id: id } }
  )
    .then((value) => {
      const result = value[0];
      if (result) {
        return res.status(202).send("Usuario actualizado");
      }
      return res.status(400).send("Usuario no encontrado!");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

// Eliminar un usuario (Al descomentar auth y isAdmin obligatoriamente poner autenticación e isAdmin)
router.delete("/delete/:id", /* auth, isAdmin, */ (req, res) => {
  const { id } = req.params;
  User.destroy({ where: { id: id } })
    .then((value) => {
      if (value === 1) {
        return res.status(202).send("User deleted");
      }
      return res.status(400).send("User not found!");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

router.get("/:idUser/image", async (req, res) => {
  try {
    const { idUser } = req.params;

    const user = await User.findOne({ where: { id: idUser } });
    res.status(200).send(user.image);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

router.post("/:idUser/image", async (req, res) => {
  try {
    const { idUser } = req.params;
    const { img } = req.body;

    const user = await User.findOne({ where: { id: idUser } });
    user.image = img;
    await user.save();
    res.status(200).send(user.image);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//---------------------------------------RUTAS EN ORDEN PARA CARRITO-------------------------------------------------

// Crear Orden PASO 1
router.post("/:idUser/carrito", (req, res) => {
  const { idUser } = req.params;
  Order.findOrCreate({
    where: { userId: idUser, state: "Cart" },
  })
    .then((respuesta) => res.status(200).send({ data: respuesta }))
    .catch((e) => res.status(400).send({ data: e }));
});

/* Agregar Orderlines a la orden PASO 2
{"orderBody":[
  { 
  "quantity":"1", 
  "productId":"3" 
  },
  { 
  "quantity":"3", 
  "productId":"4" 
  }
]}
--PASO 3 Y 4 están en routes/orders */
router.post("/:idUser/cart", async (req, res, next) => {
  try {
    const { idUser } = req.params;
    const {orderBody}= req.body;
    // console.log(orderBody);
    const order = await Order.findOrCreate({
      where: { userId: idUser, state: "Cart" },
    });
    //console.log(order)
    orderBody.forEach(async obj => {
      //console.log(obj)
    //for (let i = 0; orderline.length > i; i++) {
      var productId = obj.id;
      //console.log(id)
      var quantity = obj.count;
      //console.log(quantity)
      var product = await Product.findByPk(productId);
      product.stock = product.stock - quantity;
      const productSave = await product.save();
      //console.log(productSave);
      const orderLine = await Orderline.create({
            subtotal: product.price*quantity,
            quantity: quantity,
            orderId: order[0].dataValues.id,
            productId: productId,
            userId: idUser,
          });
          //console.log('OrderLine:',orderLine);
    }) 
    
    return res.status(200).send(order);
  } catch (error) {
    next(error);
    //return res.status(400).send({ data: error });
  }
});

/* Agregar Orderlines a la orden PASO 2 (una orderline por producto) PASO 3 Y 4 están en routes/orders
router.post("/:idUser/cart", async (req, res) => {
  try {
    const { idUser } = req.params;
    const { quantity, productId } = req.body;
    const order = await Order.findOrCreate({
      where: { userId: idUser, state: "Cart" },
    });

    const product = await Product.findByPk(productId);
    product.stock = product.stock - quantity;
    const productSave = await product.save();

    const orderLine = await Orderline.create({
      price: product.price,
      quantity: quantity,
      orderId: order[0].dataValues.id,
      productId: productId,
      userId: idUser,
    });
    return res.status(200).send(orderLine);
  } catch (error) {
    return res.status(400).send({ data: error });
  }
}); */

// Modificar cantidades de los productos en una orderline
router.put("/:userId/cart", async (req, res) => {
  const id = req.params.userId; // Me llega el userId desde el login.
  const { orderlineId, orderlineQuantity } = req.body; // Se trigerean desde el body los campos de la Orderline

  try {
    const order = await Order.findOne({
      // Obtengo la orden del usuario
      where: {
        userId: id,
        state: "Cart",
      },
    });
    if (order) {
      // Si existe (siempre debería) me traigo todas las orderlines que contenga
      const orderID = order.id;
      const userOrderlines = await Orderline.findAll({
        // Devuelve un array con todas las orderlines de esa orden
        where: {
          orderId: orderID,
        },
      });
      // Acá se modificarán las cantidades (orderlineQuantity) de esa orderline (orderlineId)
      const orderlineToChange = await Orderline.findByPk(orderlineId);
      const product = await Product.findOne({
        where: {
          id: orderlineToChange.productId,
        },
      });
      if (orderlineQuantity > product.stock) {
        return res.send(
          `Se alcanzó el máximo stock, se puede comprar hasta ${product.stock} items.`
        );
      }
      product.stock =
        product.stock + orderlineToChange.quantity - orderlineQuantity;
      const updatedProduct = await product.save();
      orderlineToChange.quantity = Number(orderlineQuantity);
      orderlineToChange.save();
      return res.send(orderlineToChange);
    }
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});

//Get de todas las orderlines en la orden del Cart + Products
router.get("/:idUser/cart", (req, res) => {
  const { idUser } = req.params;
  Order.findOne({
    where: {
      userId: idUser,
      state: "Cart",
    },
    include: [
      {
        model: Product,

/*         include: [
          {
            model: Image,
          },
        ], */
      },
    ],
  })
    .then((order) => {
      Orderline.findAll({
        where: {
          orderId: order.id,
        },
      }).then((orderlines) => {
        const orderLinePlusProduct = {
          product: order.products,
          orderlines: orderlines,
          orderId: order.id,
        };
        res.send(orderLinePlusProduct);
      });
    })
    .catch((err) => {
      res.send({ data: err }).status(400);
    });
});

// Get a todas las ordenes para el checkout
router.get("/:idUser/checkout", (req, res) => {
  const { idUser } = req.params;
  Order.findOne({
    where: {
      userId: idUser,
      state: "Created",
    },
    include: [
      {
        model: Product,
      },
    ],
  })
    .then((order) => {
      Orderline.findAll({
        where: {
          orderId: order.id,
        },
      }).then((orderlines) => {
        const orderLinePlusProduct = {
          product: order.products,
          orderlines: orderlines,
          orderId: order.id,
          totalPrice: order.totalPrice,
        };
        res.send(orderLinePlusProduct);
      });
    })
    .catch((err) => {
      res.send({ data: err }).status(400);
    });
});

//Eliminar un item de la orderline
router.delete("/:idUser/cart/:idProduct", (req, res) => {
  const idUser = req.params.idUser;
  const idProduct = req.params.idProduct;

  Orderline.findOne({
    where: {
      productId: idProduct,
    },
  }).then((orderline) => {
    if (!orderline) {
      res.send("La orden para el usuario " + idUser + ", no fue encontrada");
      return;
    }
    Product.findOne({
      where: {
        id: idProduct,
      },
    }).then((product) => {
      let nuevoStock = product.stock + orderline.dataValues.quantity;
      Product.update(
        {
          stock: nuevoStock,
        },
        {
          where: { id: product.id },
        }
      );
    });

    Orderline.destroy({
      where: {
        productId: idProduct,
      },
    })
      .then(() => {
        return res.send("El item fue borrado");
      })
      .catch((error) => {
        return res.send(error).status(500);
      });
  });
});

//Vaciar el carrito en estado cart
router.delete("/:idUser/cart", async (req, res) => {
  try {
    const { idUser } = req.params;
    const orderUser = await Order.findOne({
      where: { userId: idUser, state: "Cart" },
    });
    if (!orderUser) {
      res.send("La orden para el usuario  " + idUser + ",no fue encontrada");
      return;
    }
    const orderLine = await Orderline.findAll({
      where: { orderId: orderUser.dataValues.id },
    });
    for (let i = 0; i < orderLine.length; i++) {
      const product = await Product.findByPk(orderLine[i].dataValues.productId);
      product.stock = product.stock + orderLine[i].dataValues.quantity;
      const productSave = await product.save();
    }
    const orderDeleted = await orderUser.destroy();
    res.status(200).send("Carrito está vacío");
  } catch (error) {
    return res.status(400).send({ data: error });
  }
});


// Obtener todas las ordenes de un usuario
router.get("/orders/id", (req, res) => {  // ..users/orders?id=....o ..users/orders?state=....
  const userId = req.query.id;
  /* const state=req.query.state; */
  
  Order.findAll({
    where: {
      userId: userId,
      /* state: state, */ 
    },
  })
    .then((orders) => {
      const ordersAll = orders;
      if (ordersAll) {
        return res.status(200).json(orders);
      }
      return res.status(400).send("Not Orders");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});


// Obtener todas las ordenes de con el state...'Cart', 'Created', 'Processing', 'Canceled', 'Complete'
router.get("/orders/state", (req, res) => {  // ..users/orders?state=....
  const state=req.query.state;
  
  Order.findAll({
    where: {
      state: state, 
    },
  })
    .then((orders) => {
      const ordersAll = orders;
      if (ordersAll) {
        return res.status(200).json(orders);
      }
      return res.status(400).send("Not Orders");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

// Obtener todas las ordenes de un usuario
router.get("/:id/orders", (req, res) => {
  const userId = req.params.id;
  const state=req.query.state;
  Order.findAll({
    where: {
      userId: userId,
      state: state, 
    },
  })
    .then((orders) => {
      const ordersAll = orders;
      if (ordersAll) {
        // return res.status(200).json(orders);
        return res.send(ordersAll).status(200);
      }
      return res.status(400).send("Not Orders");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

// Profile route
router.get("/:idUser/profile", async (req, res) => {
  const { idUser } = req.params;
  Order.findAll({
    where: {
      userId: idUser,
      state: "Created",
    },
    include: {
      model: Product,
      include: {
        model: User,
      },
    },
  })
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      res.send(err);
    });
});


// This function brings necesary data for the completedOrderlines component
router.get("/:userId/completedOrderlines", async (req, res) => {
  const { userId } = req.params;
  try {
    const orderlines = await Orderline.findAndCountAll({
      include: [
        { model: Order, where: { userId: userId, state: "Complete" } },
        { model: Product },
      ],
      order: [["productId", "ASC"]],
    });
    if (!orderlines) {
      res.send("This user has no completed orders").status(406);
    }
    res.send(orderlines);
  } catch (error) {
    res.send(error);
  }
});


//password Reset
router.post("/passwordReset", /* auth, */ (req, res) => { //Primero crear usuario, luego hacerle login y luego probar esta ruta.
  const { newPassword } = req.body;
  const { id } = req.user; //Se debe colocar en el header el auth del usuario que quiere resetear la password

  const hashedPassword = bcrypt.hash(newPassword, 10).then((hashedPassword) => {
    User.update(
      {
        password: hashedPassword,
      },
      {
        where: { id: id },
      }
    )
      .then((value) => {
        const valor = value[0];
        if (valor) {
          res.send("Password has been reset");
        }
        res.send("User not found!");
      })
      .catch((err) => {
        res.send({ data: err }).status(500);
      });
  });
});

//password Reset BY forget Password
router.post("/forgotPassword/:id", (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  const hashedPassword = bcrypt.hash(newPassword, 10).then((hashedPassword) => {
    User.update(
      {
        password: hashedPassword,
      },
      {
        where: { id: id },
      }
    )
      .then(() => {
        res.send("Password Has been reset");
      })
      .catch((err) => {
        res.send({ data: err }).status(500);
      });
  });
});


//Quitar un item del carrito
//router.delete("/:idUser/cart/:itemId", async (req, res) => {
//  try {
//    const { idUser, itemId } = req.params;
//    const orderUser = await Order.findOne({
//      where: { userId: idUser, state: "Cart" },
//    });
//    if (!orderUser) {
//      res.send("La orden para el usuario  " + idUser + ",no fue encontrada");
//      return;
//    }
//    const orderLine = await Orderline.findOne({
//      where: { orderId: orderUser.dataValues.id },
//    });
//    const product = await Product.findByPk(orderLine.dataValues.productId);
//    product.stock = product.stock + orderLine.dataValues.quantity;
//    const productSave = await product.save();
//    if (orderLine) {
//      const orderDeleted = await orderLine.destroy({
//        where: { id: itemId},
//      });
//      res.status(200).send("Item Deleted");
//    } else {
//      res.status(400).send("Orderline does no exists");
//    }
//  } catch (error) {
//    return res.status(400).send({ data: error });
//  }
//});

/* router.post("/:idUser/carritoOrderline", async (req, res) => {
  try {
    const { idUser } = req.params;
    const { quantity, productId } = req.body;
    const order = await Order.findOne({
      where: { userId: idUser, state: "Cart" },
    });
    const product = await Product.findByPk(productId);
    product.stock = product.stock - quantity;
    const productSave = await product.save();

    const orderLine = await Orderline.create({
      price: product.price,
      quantity: quantity,
      orderId: order.dataValues.id,
      productId: productId,
      userId: idUser,
    });
    return res.status(200).send({ data: orderLine });
  } catch (error) {
    return res.status(400).send({ data: error });
  }
}); */

// Add Orderlines to the Cart With updated total
/* router.post("/:idUser/cart", async (req, res) => {
  try {
    const { idUser } = req.params;
    const { quantity, productId } = req.body;
    let order = await Order.findOrCreate({
      where: { userId: idUser, state: "Cart" },
    });
    //console.log('order:',order);

    const product = await Product.findByPk(productId);
    product.stock = product.stock - quantity;
    const productSave = await product.save();

    //console.log(product)

    const orderLine = await Orderline.create({
      price: product.price,
      quantity: quantity,
      orderId: order[0].dataValues.id,  // order es un array con primer elemento propiedad dataValues y alli esta el id
      productId: productId,
      userId: idUser,
    });
    const subTotal = product.price*quantity;
    //console.log('subtotal:', subTotal);  calcula subtotal bien
    let order2 = await Order.findOne({
      where: { 
        userId: idUser, 
      },
    });
      order2.totalPrice = order2[0].dataValues.totalPrice + subTotal;
      let orderSave = await order2.save();
  //console.log('orderLine:', orderLine)
    return res.status(200).send(orderLine);
  } catch (error) {
    return res.status(400).send({ data: error });
  }
});
 */


module.exports = router;