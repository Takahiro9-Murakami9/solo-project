/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable("score_date", function (table) {
      table.increments("id").primary();
      table
        .integer("score", 32)
        .notNullable()
        .index();
      table.string("date", 32)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("score_date");
};
