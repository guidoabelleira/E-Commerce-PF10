const { Product, Category } = require('../db');
const data = require('../../data.json')

const loaderProducts = async () => {
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
                category: el.category
            };
        });
        modelProducts.forEach(async (el) => {
            const productIns = await Product.findOrCreate({
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
            el.category.forEach(async (e) => {
                const categoryIns = await Category.findOne({
                    where: {
                        name: e.name
                    }
                })
                await categoryIns.addProduct(productIns[0])
            })
        });
        console.log('Productos cargados en la DB 😉👌')
    }
    catch (error) {
        console.log('Error en la carga de productos a la DB 😪👎')
    }
}

const loaderCategory = async () => {
    try {
        const modelCategories = data.map((el) => {
            return el.category.map((e) => e.name)
        })
        const allCategories = []
        for (let i = 0; i < modelCategories.length; i++) {
            for (let j = 0; j < modelCategories[i].length; j++) {
                if (!allCategories.includes(modelCategories[i][j])) allCategories.push(modelCategories[i][j])
            }
        }
        allCategories.forEach(async (el) => {
            await Category.findOrCreate({
                where: {
                    name: el
                }
            })
        })
        console.log("Categorías cargadas correctamente! 😊✔")
    }
    catch (error) {
        console.log("Error en la carga de categorías 🤦‍♀️👀")
    }
}

module.exports = { loaderProducts, loaderCategory }