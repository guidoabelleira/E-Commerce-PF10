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
  

  const getAllCategories = async () => {
    return Category.findAll({});
  }

  module.exports = {
	getAllInfo, 
  getAllCategories,
};