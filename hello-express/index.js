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
})
// Listen to requests on 8080 port
app.listen(8080);