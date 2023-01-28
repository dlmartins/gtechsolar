const knex = require("../config/db");

exports.up = function (knex, Promise) {
  return knex.schema.createTable("contaluz", (table) => {
    table.increments("id").primary();
    table.integer("userId").references("id").inTable("clients");
    table.integer("uc");
    table.string("classe");
    table.integer("valorKwh");
    table.integer("valorIp");
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
    table.integer("valorKwhPonta");
    table.integer("janP");
    table.integer("fevP");
    table.integer("marP");
    table.integer("abrP");
    table.integer("maiP");
    table.integer("junP");
    table.integer("julP");
    table.integer("agoP");
    table.integer("setP");
    table.integer("outP");
    table.integer("novP");
    table.integer("dezP");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("contaluz");
};