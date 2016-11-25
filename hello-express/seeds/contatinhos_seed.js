
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contatinhos').del()
    .then(function () {
      return Promise.all([
        knex('contatinhos').insert({
          contatinho_id: 1, 
          nome_contatinho: 'Fran',
          fone_contatinho: '85 9999-9999',
          observacao_contatinho: ''
        }),
        knex('contatinhos').insert({
          contatinho_id: 2, 
          nome_contatinho: 'Bettie',
          fone_contatinho: '85 9999-9999',
          observacao_contatinho: ''
        }),
        knex('contatinhos').insert({
          contatinho_id: 3, 
          nome_contatinho: 'Anne',
          fone_contatinho: '85 9999-9999',
          observacao_contatinho: ''
        }),
        knex('contatinhos').insert({
          contatinho_id: 4, 
          nome_contatinho: 'John',
          fone_contatinho: '85 9999-9999',
          observacao_contatinho: ''
        }),
        knex('contatinhos').insert({
          contatinho_id: 5, nome_contatinho: 'Luke',
          fone_contatinho: '85 9999-9999',
          observacao_contatinho: ''
        }),
        knex('contatinhos').insert({
          contatinho_id: 6, 
          nome_contatinho: 'Albert',
          fone_contatinho: '85 9999-9999',
          observacao_contatinho: ''
        })
      ]);
    });
};
