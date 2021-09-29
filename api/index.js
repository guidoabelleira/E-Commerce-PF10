const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loaderDB } = require('./src/loader/loader')


conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    loaderDB();
    console.log('%s listening at 3001');
  });
});
