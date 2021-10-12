const { Router } = require('express');
const axios = require("axios");
const { Product, Category, category_product } = require("../db.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const productsRoute = require('./products');
const categoriesRoute = require('./categories');
const usersRoute = require('./users');
const reviewsRoute = require('./reviews');
const ordersRoute = require('./orders');
const sendEmailRoute = require("./sendEmail");
const authRoute = require("./auth")
const mercadoPago = require("./mercadopago")

router.use('/products', productsRoute);
router.use('/categories', categoriesRoute );
router.use('/users', usersRoute );
router.use('/reviews', reviewsRoute );
router.use('/orders', ordersRoute );
router.use("/sendEmail", sendEmailRoute);
router.use("/auth", authRoute);
router.use("/mercadopago", mercadoPago);

module.exports = router;


