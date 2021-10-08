const { Product, Category, category_product } = require('../db');


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

const getSales = async () => {
  const sale = await Product.findAll({
    where: {
      onSale: true
    }
  });
  if (sale.length > 12) {
    return sale.slice(0, 12)
  }
  return sale;
}

const getLatests = async () => {
  const info = await getAllInfo();
  const latest = info.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return 0;
  });
  return latest.slice(0, 12)
}

module.exports = {
  getAllInfo,
  getAllCategories,
  getSales,
  getLatests
};