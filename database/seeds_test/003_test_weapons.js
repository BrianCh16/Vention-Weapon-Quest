/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('weapons_materials').del()
  await knex('weapons').del()

  return await Promise.all([
    await knex("weapons").insert([
      { id: 1, name: "QA Stick", power_level: 0, status: "new" }
    ]),
    await knex("weapons_materials").insert([
      { id: 1, weapon_id: 1, material_id: 1 },
      { id: 2, weapon_id: 1, material_id: 9 }
    ])
  ]);
};
