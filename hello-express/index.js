'use strict';

const express = require('express');
const app = express();

// Gets a greeting in the '/hello'
app.get('/hello', (request, response) => {
    response.send('Welcome to Hello Express!!!');
});

//greet an user based in a query param
app.get('/greet', (request, response) => {
    response.send(`Hello ${request.query.nome}!`);
});

app.get('/queryparams', (request, response) => {
    console.log(request.query);
    response.send('See your console...');
});

app.get('pathparams/:nome/:time', (request, response) => {
    response.send('See your console...');

    console.log(request.params);
    console.log(`Meu nome é ${request.params.nome} e sou ${request.params.time} desde sempre!`);
});

app.get('optional(/:maybe)?', (request, response) => {
    if (request.params.maybe) {
        response.send(`Call me ${request.params.maybe}`);
    }
    else {
        response.send('I just met you...');
    }

    console.log(request.params);
});

// Listen to requests on 8080 port
app.listen(8080);