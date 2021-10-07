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

router.use('/products', productsRoute);
router.use('/categories', categoriesRoute );
router.use('/users', usersRoute );
router.use('/reviews', reviewsRoute );

module.exports = router;


