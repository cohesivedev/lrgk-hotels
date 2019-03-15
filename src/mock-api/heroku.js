const jsonServer = require('json-server');
const server     = jsonServer.create();

const DATA = require('.')();
server.use((req, res) => res.json(DATA.hotels));
server.listen(process.env.PORT || 3001);