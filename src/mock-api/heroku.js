const jsonServer = require('json-server');
const server     = jsonServer.create();

const DATA = require('.')();
server.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(DATA.hotels);
});
server.listen(process.env.PORT || 3001);