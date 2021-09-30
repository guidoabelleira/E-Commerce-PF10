const { Product } = require('../db');
const axios = require('axios');
const data = require('../../data.json')

const loaderDB = async () => {
    try {
        const modelProducts = data.map((el) => {
            return {
                name: el.name,
                id: el.id,
                image: el.image,
                price: el.price,
                stock: el.stock,
                onStock: el.onStock,
                onSale: el.onSale,
                description: el.description,
            };
        });
        modelProducts.forEach(async (el) => {
            await Product.findOrCreate({
                where: {
                    name: el.name,
                    id: el.id,
                    image: el.image,
                    price: el.price,
                    stock: el.stock,
                    onStock: el.onStock,
                    onSale: el.onSale,
                    description: el.description,
                },
            });
        });
        console.log('Productos cargados en la DB 😉👌')
    }
    catch (error) {
        console.log('Error en la carga de productos a la DB 😪👎')
    }
}

module.exports = { loaderDB }