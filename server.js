const path = require('path');
const jsonServer = require(path.join(__dirname, 'node_modules', 'json-server'));
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 10000, () => {
    console.log('JSON Server is running');
});
