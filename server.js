const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.pug');
})

app.listen(3000)
