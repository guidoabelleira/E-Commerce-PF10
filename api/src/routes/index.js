const { Router } = require('express');
const axios = require("axios");
const { Product, Category, category_product } = require("../db.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const productsRoute = require('./products');
//const categoryRoute = require('./category');

router.use('/products', productsRoute);
//router.use('/category', categoryRoute );

module.exports = router;


