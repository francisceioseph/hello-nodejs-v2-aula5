
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('contatinhos', table => {
    table.increments('contatinho_id');
    table.string('nome_contatinho');
    table.string('fone_contatinho');
    table.text('observacao_contatinho');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contatinhos');
};
