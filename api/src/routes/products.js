const router = require('express').Router();
const {Product, Category} = require('../db');
const { getAllInfo } = require('../controllers/controllers');
const data = require('../../data.json');
//const { v4: uuidv4 } = require('uuid');


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

router.get("/:category", async (req, res, next) => { 
    const category  = req.params.category; 
    try {
        const dataProducts = await getAllInfo();         
            if (category) {                 
                let productWithcat = await dataProducts.filter( el =>
                el.categories[0]?.name === category || el.categories[1]?.name === category                                     
                );
                    
                await productWithcat.length? 
                    res.status(200).send(productWithcat): 
                    res.status(404).send("No se encontro ningun producto de esa categoria");
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

router.post('/', async (req, res, next) => {
    try {
        //const id = uuidv4();
        const { 
            name,         
            image, 
            price, 
            stock, 
            onStock, 
            onSale, 
            description, 
            category  
        } = req.body;

        const newProduct = await Product.create({
            name,     
            image,
            price, 
            stock, 
            onStock, 
            onSale,
            description,
            category           
        });
 
        const categoryDb = await Category.findAll({
            where: {name: category}
        }); 
            await newProduct.addCategories(categoryDb);              
            res.status(200).send(newProduct); 

    } catch (error) {
        next(error);
    }
});



module.exports = router;