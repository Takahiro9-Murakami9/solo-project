/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("users", function (table) {
        table.increments("id").primary();
        table
          .string("email", 32)
          .notNullable()
          .index();
        table.string("first_name", 32);
        table.string("last_name", 32);
        table.string("password", 255)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users");
  
};
