/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("weapons", function (t) {
        t.increments("id").unsigned().primary();
        t.string("name").notNullable();
        t.integer("power_level").notNullable();
        t.string("status");
      });
    
      await knex.schema.createTable("weapons_materials", function (t) {
        t.increments("id").unsigned().primary();
        t.integer("weapon_id").unsigned().notNullable().references("id").inTable("weapons");
        t.integer("material_id").unsigned().notNullable().references("id").inTable("materials");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("weapons_materials");
    await knex.schema.dropTable("weapons");
};
