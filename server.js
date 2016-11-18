const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');
app.use(express.static('static'));

app.get('/', function (req, res) {
    res.render('index.pug');
})

app.get('/level1', function (req, res) {
    res.render('level1.pug');
})

app.get('/level2', function (req, res) {
    res.render('level2.pug');
})

app.get('/level3', function (req, res) {
    res.render('level3.pug');
})

app.get('/level4', function (req, res) {
    res.render('level4.pug');
})

app.get('/level5', function (req, res) {
    res.render('level5.pug');
})

app.get('/level6', function (req, res) {
    res.render('level6.pug');
})

app.get('/level7', function (req, res) {
    res.render('level7.pug');
})

app.get('/level8', function (req, res) {
    res.render('level8.pug');
})

app.get('/level9', function (req, res) {
    res.render('level9.pug');
})

app.get('/level10', function (req, res) {
    res.render('level10.pug');
})

app.listen(process.env.PORT);
