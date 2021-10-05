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

router.use('/products', productsRoute);
router.use('/categories', categoriesRoute );
router.use('/users', usersRoute );

module.exports = router;


