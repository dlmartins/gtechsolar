/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable("contaluz", (table) => {
    table.increments("id").primary();
    table.string('client_id').unsigned().notNullable();
    table.foreign('client_id').references('control_num').inTable('clients');
    table.integer("uc");
    table.string("classe");
    table.float("valor_kwh");
    table.float("valor_ip");
    table.integer("jan").notNull();
    table.integer("fev").notNull();
    table.integer("mar").notNull();
    table.integer("abr").notNull();
    table.integer("mai").notNull();
    table.integer("jun").notNull();
    table.integer("jul").notNull();
    table.integer("ago").notNull();
    table.integer("set").notNull();
    table.integer("out").notNull();
    table.integer("nov").notNull();
    table.integer("dez").notNull();
    table.boolean("ponta").notNull();
    table.float("valor_kwh_ponta");
    table.integer("jan_p");
    table.integer("fev_p");
    table.integer("mar_p");
    table.integer("abr_p");
    table.integer("mai_p");
    table.integer("jun_p");
    table.integer("jul_p");
    table.integer("ago_p");
    table.integer("set_p");
    table.integer("out_p");
    table.integer("nov_p");
    table.integer("dez_p");
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("contaluz");
};