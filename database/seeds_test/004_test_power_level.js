const Weapon = require("../../models/weapon");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

/*Q5 part 2 here:
Calculates Weapon power level by recursively query CTE
*/
exports.seed = async function() {
  return await Weapon.getPowerLevel(1).then(power_level => Weapon.update(1, { power_level }));
};
