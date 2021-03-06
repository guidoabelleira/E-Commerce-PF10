const router = require('express').Router();
const { Product, Category } = require('../db');
const { getAllInfo, getOnSales, getLatests, getPopulars, alertStock } = require('../controllers/controllers');
const data = require('../../data.json');

router.get("/getHome/sales", async (req, res, next) => {
    try {
        const sale = await getOnSales();
        res.json(sale);
    }
    catch (error) {
        next(error);
    }
})

router.get("/getHome/latests", async (req, res, next) => {
    try {
        const last = await getLatests();
        res.json(last);
    }
    catch (error) {
        next(error);
    }
})

router.get("/alertStock/:id", async (req, res, next) => {
    const {id} = req.params
    try {
        const stock = await alertStock(id);
        res.send(stock);
    }
    catch (error) {
        next(error);
    }
})
/* router.get("/getHome/populars", async (req, res, next) => {
    try {
        const pop = await getPopulars();
        res.json(pop);
    }
    catch (error) {
        next(error);
    }
}) */

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
                res.json({data: {error:"No se encontrĂ³ el producto buscado"}});
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
                    res.status(404).send("No se encontrĂ³ ningun producto de esa categorĂ­a");
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
       productId.length ? res.status(200).json( productId) : res.json({data: {error:'No se encontrĂ³ el producto requerido'}})             
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
   res.status(200).send('Producto eliminado con Ă©xito') 
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

// Ruta para asignar una categoria a un producto
router.post("/:idProduct/addCategory/:idCategory", (req, res, next) => {
    const { idProduct, idCategory } = req.params;
    var product = Product.findByPk(idProduct);
    var category = Category.findByPk(idCategory);
  
    Promise.all([product, category])
      .then((data) => {
        data[0].addCategory(data[1]);
        res
          .status(200)
          .send(
            `Se agrego la categoria ${data[1].dataValues.name} al producto ${data[0].dataValues.name}`
          );
      })
      .catch(next);
  });
  
  //Ruta para eliminar una categoria de un producto
  router.delete("/:idProduct/deleteCategory/:idCategory", (req, res, next) => {
    const { idProduct, idCategory } = req.params;
    var product = Product.findByPk(idProduct);
    var category = Category.findByPk(idCategory);
  
    Promise.all([product, category])
      .then((data) => {
        data[0].removeCategory(data[1]);
        res
          .status(200)
          .send(
            `Se elimino la categoria ${data[1].dataValues.name} del producto ${data[0].dataValues.name}`
          );
      })
      .catch(next);
  });


module.exports = router;