const { db, setupTestDB } = require('../config/dbConfig');

// Hook to rollback, re-migrate, and re-seed database before every test
beforeAll(async () => {
  await setupTestDB(); 
});

// Hook to Close Database connection and clean up after testing
afterAll(async () => {
  await db.destroy(); 
});

test('Q5 part 1 - create a weapon that follows the image requirement', async () =>{
  const weapons_materials = await db('weapons_materials').select('*');
  const weapons = await db('weapons').select('*');
  
  //verify correct name
  expect(weapons[0]['name']).toBe('QA Stick');

  //Verify mapping material 1
  expect(weapons[0]['id']).toBe(weapons_materials[0]['weapon_id']);
  expect(weapons_materials[0]['material_id']).toBe(1);

  //Verify mapping material 2
  expect(weapons[0]['id']).toBe(weapons_materials[1]['weapon_id']);
  expect(weapons_materials[1]['material_id']).toBe(9);
});


test('Q5 part 2 - verify the power level is calculated correctly with the recursive query', async () =>{
  const result = await db('weapons').select('*');
  //verify correct name
  expect(result[0]['name']).toBe('QA Stick');

  /*
  verify correct power level
  ID 1 ➡️ 5.340
  ID 9 ➡️ 11,740
  1+9 = 17080
  */
  expect(result[0]['power_level']).toBe(17080);
});


// test correct seeding and size of each table

test('expects 12 records of materials from the Materials table', async () => {
  const result = await db('materials').select('*');
  expect(result).toHaveLength(12);
});

test('expects 10 records of compositions from the compositions table', async () => {
  const result = await db('compositions').select('*');
  expect(result).toHaveLength(10);
});

test('expects 1 record of weapon from the weapons table', async () => {
  const result = await db('weapons').select('*');
  expect(result).toHaveLength(1);
});

test('expects 2 records of material mapping from the weapons_materials table', async () => {
  const result = await db('weapons_materials').select('*');
  expect(result).toHaveLength(2);
});