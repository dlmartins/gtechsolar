const knex = require("../config/db");

exports.up = function (knex, Promise) {
  return knex.schema.createTable("contaluz", (table) => {
    table.increments("id").primary();
    table.integer("Uc");
    table.string("clase");
    table.integer("valorKwh").notNull();
    table.integer("valorIp").notNull();
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
    table.integer("userId").references("id").inTable("clients");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.droptable("contaluz");
};
