/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  console.log("CALLING UP!");
  const usersExists = await knex.schema.hasTable('users');
  if (!usersExists) {
    return await knex.schema
      .createTable('users', (table) => {
        table.increments('id', true);
        table.string('first');
        table.string('last');
        table.string('email');
        table.unique('email');
        table.string('passwordHash');
        table.specificType('interests', 'string[]');
        table.timestamps(true, true);
      })
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTableIfExists('users');
};
