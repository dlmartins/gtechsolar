/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
  return knex.schema.createTable("clients", (table) => {
    table.increments("id").primary();
    table.string('control_num').unique().notNullable();
    table.string("name").notNull();
    table.string("state").notNull();
    table.string("city").notNull();
    table.string("phone").notNull();
    table.string('vendedor').notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("clients");
};
