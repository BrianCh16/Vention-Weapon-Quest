/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable("materials", function (t) {
        t.increments("id").unsigned().primary();
        t.integer("power_level");
        t.integer("qty");
        t.timestamp("deleted_at");
      });

      await knex.schema.createTable("compositions", function (t) {
        t.integer("parent_id").index();
        t.integer("material_id").index();
        t.integer("qty");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("materials");
    await knex.schema.dropTableIfExists("compositions");
};
