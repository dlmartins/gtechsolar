/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('proposta', table => {
      table.increments('id').primary()
      table.string('userId').unsigned().notNullable();
      table.foreign('userId').references('controlNum').inTable('clients');
      table.string('rev').notNull()
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

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex, Promise) {
  return knex.schema.dropTable("proposta");
};
