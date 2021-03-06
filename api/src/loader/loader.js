const { Product, Category, User } = require('../db');
const data = require('../../data.json')
const admin = require('../../admin.json')

const loaderAdmin = async () => {
    try {
        User.create({
            name: admin.name,
            lastname: admin.lastname,
            email: admin.email,
            address: admin.address,
            userRole: admin.userRole,
            isAdmin: admin.isAdmin,
            password: admin.password,
            image: admin.image,
        })
        console.log("Admin creado con Γ©xito! πβ¨")
    }
    catch (error) {
        console.log("Error en la carga del admin ππ±")
    }
}

const loaderProducts = async () => {
    try {
        const modelProducts = data.map((el) => {
            return {
                name: el.name,
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
        console.log('Productos cargados en la DB ππ')
    }
    catch (error) {
        console.log('Error en la carga de productos a la DB πͺπ')
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
        console.log("CategorΓ­as cargadas correctamente! πβ")
    }
    catch (error) {
        console.log("Error en la carga de categorΓ­as π€¦ββοΈπ")
    }
}


module.exports = { loaderProducts, loaderCategory, loaderAdmin }