var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bookRouter = require('./routes/book');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);

module.exports = app;

app.post('/data', (req, res) => {
    const item = req.body;
    data.push(item);
    res.send(item);
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const item = data.find(i => i.id === id);
    if (!item) res.status(404).send('Item not found');
    const index = data.indexOf(item);
    data[index] = req.body;
    res.send(data[index]);
});

app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const item = data.find(i => i.id === id);
    if (!item) res.status(404).send('Item not found');
    const index = data.indexOf(item);
    data.splice(index, 1);
    res.send(item);
});
