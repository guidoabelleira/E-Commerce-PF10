const router = require('express').Router();
const { Product, User } = require('../db');

/* router.get("/", async (req, res, next) => {
    try {
        const sale = await getOnSales();
        res.json(sale);
    }
    catch (error) {
        next(error);
    }
}) */

module.exports = router;