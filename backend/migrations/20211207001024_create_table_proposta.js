/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('proposta', table => {
      table.increments('id').primary()
      table.string('client_id').unsigned().notNullable();
      table.foreign('client_id').references('control_num').inTable('clients');
      table.string('rev').notNull()
      table.integer('Uc').notNull()
      table.integer('pot_sistema').notNull()
      table.string('qt_modulos').notNull()
      table.string('inversor').notNull()
      table.string('area_estimada').notNull()
      table.string('ger_antes').notNull()
      table.string('ger_depois').notNull()
      table.string('val_mensal_antes').notNull()
      table.string('val_mensal_depois').notNull()
      table.string('val_anual_antes').notNull()
      table.string('val_anual_depois').notNull()
      table.string('valor_total').notNull()
  })
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex, Promise) {
  return knex.schema.dropTable("PROPOSTA");
};
