const {Product, Categories, category_product} = require('../db');
//const axios = require('axios');
//const data = require('./data.json');


  const getAllInfo = async () => {
     // return await data
    return await Product.findAll({      
     /*  include: {
        model: Categories, 
        attributes: ["name"], 
        through: {
          attributes: [],
        },
      }, */
    });
  }; 
  

  /* const createProduct = async (
    name,
  ) => {
    try {
      const id = uuidv4();
      const newProduct = await Product.create({
        name,
        image,
        price,
        stock,
        onStock,
        onSale,
        description,
        id: id
      });
  
      const categoriesDb = await Categories.findAll({
        where: { name: categories },
      });
  
      await newProduct.addType(categoriesDb);
      return newProduct;
    } catch (err) {
      console.log(err);
    }
  };
   */
  module.exports = {
	getAllInfo, 
    //createProduct
};