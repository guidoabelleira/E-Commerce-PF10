const router = require('express').Router();
const {Product, Categories} = require('../db');
//const axios = require('axios');
const { getAllInfo, /* createProduct */} = require('../controllers/controllers');
const data = require('../../data.json');

router.get("/json", async (req, res, next) => {
        res.json(data);
});

router.get("/", async (req, res, next) => { 
    const name  = req.query.name; 
    try {
        const dataProducts = await getAllInfo();         
            if (name) {
                const nameProduct = dataProducts.filter((e) =>
                e.name.toLowerCase().includes(name.toLowerCase())
                );       
                nameProduct.length? 
                res.status(200).send(nameProduct): 
                res.status(404).send("No se encontro el producto buscado");
            } else {      
                const dataProducts = await getAllInfo();                
                res.status(200).json(dataProducts);
            }
    } catch(err) {
        next(err);
    }
});


module.exports = router;