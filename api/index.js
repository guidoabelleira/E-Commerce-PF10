const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loaderProducts, loaderCategory } = require('./src/loader/loader')


conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await loaderCategory();
    await loaderProducts();
    console.log('%s listening at 3001');
  });
});