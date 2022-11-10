/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .table("score_date", function (table) {
      table
        .integer("user_id")
        .references("users.id")
        .notNullable()
        .index();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.table("score_date", function (table) {
        table.dropColumn("user_id");
      })
};
