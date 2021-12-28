const knex = require("../config/db");

exports.up = function(knex, Promise) {
  return knex.schema.createTable('proposta', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.integer('Uc').notNull()
      table.integer('potSistema').notNull()
      table.string('qtModulos').notNull()
      table.string('inversor').notNull()
      table.string('areaEstimada').notNull()
      table.string('gerAntes').notNull()
      table.string('gerDepois').notNull()
      table.string('valMensalAntes').notNull()
      table.string('valMensalDepois').notNull()
      table.string('valAnualAntes').notNull()
      table.string('valAnualDepois').notNull()
      table.string('valorTotal').notNull()
      

  })
};

exports.down = function(knex, Promise) {
  
};
