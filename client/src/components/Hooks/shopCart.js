const verify = (product, state) => {
    if (state.length > 0) {
      let isProduct = state.filter((e) => e.id === product.id);
      console.log(isProduct)
      if (isProduct.length > 0) {
        let finalProduct = state.map((e) => {
          if (e.id === product.id) {
            e.count += 1;
            return e;
          } else {
            return e;
          }
        });
        return finalProduct;
      } else {
        let mainArray = state;
        product.count = 1;
        mainArray.push(product);
        return mainArray;
      }
    } else {
      let array = [];
      product.count = 1;
      array.push(product);
      return array;
    }
  };
  
  
module.exports = verify;