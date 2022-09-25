/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
const animalsExists = await knex.schema.hasTable('animals');
  await knex.schema
  .createTable('animals', (table) => {
    table.increments('id', true);
    table.string('type');
    table.string('breed');
    table.string('name');
    table.integer('age');
    table.string('sex');
    table.string('description');
    table.integer('handlerID');
    table.specificType('images', 'string[]');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTableIfExists('animals');
};
