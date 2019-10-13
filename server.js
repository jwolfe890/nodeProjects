var express = require('express')
var PORT = 3000
var path = require('path')
var app = express()
var http = require('http')

var server = http.createServer(app);

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    var data = {
        title: 'Home Page',
        body: 'This is the Home page.'
    };
    res.render('page', data)
})

app.get('/services', function (req, res) {
    var data = {
        title: 'Test Page',
        body: 'This is the Test page.',
        services: ["Coins", "Videos", "Playbooks"]
    };
    res.render('page', data)
})

app.get('**', function (req, res) {
    res.send('** route');
})

server.listen(PORT, function () {
    console.log('Server Running on ' +
        PORT)
})