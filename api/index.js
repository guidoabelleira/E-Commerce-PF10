const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loaderProducts, loaderCategory, loaderAdmin } = require('./src/loader/loader')
const  {
  userDb,
  orderDb,
  orderlineDb,
  review_productDb,
  reviewsDb,
} = require('./data.js')

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async () => {
    await loaderCategory();
    await loaderProducts();
    /*     await loaderAdmin(); */
    //await review_productDb();
    await userDb()
    await orderDb()
    await orderlineDb()
    await reviewsDb();
    console.log('%s listening at 3001');
  });
});