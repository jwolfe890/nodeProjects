var express = require('express')
var PORT = 4200
var app = express()

var server = http.createServer(app);

server.listen(PORT, function () {
    console.log('Server Running on :: ' +
        PORT)
})