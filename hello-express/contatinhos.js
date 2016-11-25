'use strict';

const knexfile = require('./knexfile')['development'];
const knex = require('knex')(knexfile);
const express = require('express');
const app = express();

app.get('/contatinhos/:contatinho_id', (request, response) => {
  knex('contatinhos').select('nome_contatinho', 'fone_contatinho')
  .where({
    contatinho_id: request.params.contatinho_id
  })
  .then(contatinhos => {
    let contatinho = contatinhos[0];

    if (contatinho) {
      response.send(`${contatinho.nome_contatinho} - ${contatinho.fone_contatinho}`);
    }
    else {
      response.send('Não há nenhum contatinho para essa id, amigo...');
    }
  })
  .catch(error => {
    console.log('error while loading contatinhos: ', error);
    response.send('Error 500');
  })
});

app.listen(8080);
