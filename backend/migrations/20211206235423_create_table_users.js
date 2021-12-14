exports.up = function (knex, Promise) {
  return knex.schema.createTable("users", (table) => {
    table.increment("id").primary();
    table.string("name").notNull();
    table.string("email").notNull().unique();
    table.string("password").notNull();
    table.boolean("admin").notNull.defaulTo(false);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("users");
};
