const {Product, Category, category_product} = require('../db');


  const getAllInfo = async () => {
     return await Product.findAll({      
     include: {
        model: Category, 
        attributes: ["name"], 
        through: {
          attributes: [],
        },
      }, 
    });
  }; 
  

  module.exports = {
	getAllInfo, 
};