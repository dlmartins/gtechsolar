/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable("contaluz", (table) => {
    table.increments("id").primary();
    table.string('userId').unsigned().notNullable();
    table.foreign('userId').references('controlNum').inTable('clients');
    table.string("uc");
    table.string("classe");
    table.string("valorKwh");
    table.string("valorIp");
    table.string("jan").notNull();
    table.string("fev").notNull();
    table.string("mar").notNull();
    table.string("abr").notNull();
    table.string("mai").notNull();
    table.string("jun").notNull();
    table.string("jul").notNull();
    table.string("ago").notNull();
    table.string("set").notNull();
    table.string("out").notNull();
    table.string("nov").notNull();
    table.string("dez").notNull();
    table.boolean("ponta").notNull();
    table.string("valorKwhPonta");
    table.string("janP");
    table.string("fevP");
    table.string("marP");
    table.string("abrP");
    table.string("maiP");
    table.string("junP");
    table.string("julP");
    table.string("agoP");
    table.string("setP");
    table.string("outP");
    table.string("novP");
    table.string("dezP");
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("contaluz");
};