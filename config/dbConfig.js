const knex = require('knex');
const knexConfig = require('../knexfile');

//dependantly inject DB depending on which environment is being ran
const environment = process.env.DB_ENV || 'development';
const db = knex(knexConfig[environment]);


async function setupTestDB() {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
}

module.exports = { db, setupTestDB };
