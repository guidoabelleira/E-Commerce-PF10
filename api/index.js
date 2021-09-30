const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loaderDB } = require('./src/loader/loader')


conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    loaderDB();
    console.log('%s listening at 3001');
  });
});
