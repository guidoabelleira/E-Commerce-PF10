const router = require('express').Router();
const {Product, Category} = require('../db');


router.get("/", async (req, res, next) => { 
  try {
        const categories = await Category.findAll({
            include:{
                model: Product, 
                attributes: ["name"], 
                through: {
                attributes: [],
                }    
            }
        })
        res.status(200).send(categories) 
  } catch(error) {
      next(error);
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
   const categoryId = await Category.findByPk( id, {
    include: Product,
    where: {
      id: id,
    }})  
   return res.json(categoryId)
  } catch (error) {
     next(error);
  }
 });

router.post('/',  async (req, res, next) => {
 const newCategory = req.body;  //Postman: {name: 'categoría de prueba', productsId:[1, 2, 3]}

 try {
  const [cat, created] = await Category.findOrCreate({  
    where: {
      name: newCategory.name,
    }
  })
  await cat.addProduct(newCategory.productsId)
  return res.json(newCategory)
 } catch (error) {
    next(error);
 }
});

router.delete ('/:id', async (req, res) => {    
 const {id} = req.params;   
  try {
    await Category.destroy({   
        where: {                                            
          id
        }
   })
   res.status(200).send('Categoría eliminada con éxito') 
  } catch (error) {
     next(error);
  }
}) 

router.put('/:id', async (req, res, next) => {
  const {id} = req.params
  const category = req.body;  //Postman: {name: 'nuevo nombre de prueba'}
   try {
       const categoryDb = await Category.update(category, {   
              where: {
                id: id
              }
       })
     return res.status(200).send('Categoría cambiada con éxito')
   } catch (error) {
       next(error);
   } 
})


module.exports = router;