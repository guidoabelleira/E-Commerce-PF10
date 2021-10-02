const router = require('express').Router();
const {Product, Category} = require('../db');
const { getAllInfo } = require('../controllers/controllers');
const data = require('../../data.json');
//const { v4: uuidv4 } = require('uuid');


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
    } catch(error) {
        next(error);
    }
});

router.get("/category/:category", async (req, res, next) => { 
    const category  = req.params.category; 
    try {
        const dataProducts = await getAllInfo();         
            if (category) {                 
                let productWithcat = await dataProducts.filter( el =>
                el.categories[0]?.name === category || el.categories[1]?.name === category                                     
                );
                    
                await productWithcat.length? 
                    res.status(200).send(productWithcat): 
                    res.status(404).send("No se encontró ningun producto de esa categoría");
            } else {      
                const dataProducts = await getAllInfo();                
                res.status(200).json(dataProducts);
            }
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
   try {
     const productsTotal = await getAllInfo();
     if (id){
       let productId = await productsTotal.filter(el => el.id == id);
       productId.length ? res.status(200).json( productId) : res.json({data: {error:'No se encontró el producto requerido'}})             
     }
    } catch(error) {
        next(error);
    }
})

router.delete ('/', async (req, res) => {    
 let {id} = req.body;   
  try {
    await Product.destroy({   
        where: {                                            
          id
        }
   })
   res.status(200).send('Producto eliminado con éxito') 
  } catch (error) {
     next(error);
  }
}) 

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
       
   } catch (error) {
       next(error);
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