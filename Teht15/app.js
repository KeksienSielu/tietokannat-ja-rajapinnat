var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

// GET-metodi
app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

//GET-metodi yhdellä parametrilla
app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

// Get-metodi kahdella parametrilla
app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

// Vaihtoehtoinen tyyli käyttää kahta parametria Get-metodina
app.get('/example2/:firstName&:lastName',
    function(request, response){
       response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

// POST-metodi
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);