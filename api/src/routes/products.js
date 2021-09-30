const router = require('express').Router();
const {Product, Categories} = require('../db');
//const axios = require('axios');
const { getAllInfo, /* createProduct */} = require('../controllers/controllers');
const data = require('../../data.json');

//Realizado por Cecilia
router.get("/json", async (req, res, next) => {
        res.json(data);
});

//Realizado por Cecilia
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

//Realizado por Pía
router.get('/:id', async (req, res) => {
    const {id} = req.params;
   try {
     const productsTotal = await getAllInfo();
     if (id){
       let productId = await productsTotal.filter(el => el.id == id);
       productId.length ? res.status(200).json( productId) : res.json({data: {error:'No se encontró el producto requerido'}})             
     }
   } catch (error) {
     console.log(err);
   }
   })

//Realizado por Pía
router.delete ('/product', async (req, res) => {    
 let {name} = req.body;   
  await Product.destroy({   
        where: {                                            
          name
        }
   })
 res.status(200).send('Producto eliminado con éxito')
}) 

//Realizado por Pía
router.put('/:id', async (req, res, next) => {
  let {id} = req.params
   let product = req.body;
   try {
       let productDb = await Product.update(product, {   
              where: {
                id: id
              }
       })
        return res.status(200).json({cambiado: true})
       
   } catch (err) {
       next(err);
   } 
})


module.exports = router;