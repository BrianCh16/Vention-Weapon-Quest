const Weapon = require("../../models/weapon");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function() {
  return await Weapon.getPowerLevel(1).then(power_level => Weapon.update(1, { power_level }));
};
