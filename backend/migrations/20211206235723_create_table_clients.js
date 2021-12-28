const knex = require("../config/db");

exports.up = function (knex, Promise) {
  return knex.schema.createTable("clients", (table) => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("cidade").notNull();
    table.string("estado").notNull();
    table.string("telefone").notNull();
  });
};

exports.down = function (knex, Promise) {};
return knex.schema.dropTable("clients");
