const http = require('http');
const routing = require('./routing/index');

let server = new http.Server(function(req, res) {
    // API сервера будет принимать только POST-запросы и только JSON, так что записываем
    // всю нашу полученную информацию в переменную jsonString
    var jsonString = '';
    res.setHeader('Content-Type', 'application/json');
    req.on('data', (data) => { // Пришла информация - записали.
        jsonString += data;
    });

    req.on('end', () => {// Информации больше нет - передаём её дальше.
        routing.define(req, res, jsonString);
    });
});

server.listen(3000, 'localhost');