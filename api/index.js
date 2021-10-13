const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loaderProducts, loaderCategory, loaderAdmin } = require('./src/loader/loader')


conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async () => {
    await loaderCategory();
    await loaderProducts();
/*     await loaderAdmin(); */
    console.log('%s listening at 3001');
  });
});