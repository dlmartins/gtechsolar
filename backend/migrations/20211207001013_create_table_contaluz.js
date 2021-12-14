exports.up = function (knex, Promise) {
  return knex.schema.createTable("contaluz", (table) => {
    table.increment("id").primary();
    table.number("Uc");
    table.string("clase");
    table.number("valorKwh").notNull();
    table.number("valorIp").notNull();
    table.number("jan").notNull();
    table.number("fev").notNull();
    table.number("mar").notNull();
    table.number("abr").notNull();
    table.number("mai").notNull();
    table.number("jun").notNull();
    table.number("jul").notNull();
    table.number("ago").notNull();
    table.number("set").notNull();
    table.number("out").notNull();
    table.number("nov").notNull();
    table.number("dez").notNull();
    table.integer("parentId").references("id").inTable("clients");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.droptable("contaluz");
};
