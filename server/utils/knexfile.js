// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// console.log(process.env.DATABASE_URL);
module.exports = {

  development: {
    client: 'cockroachdb',
    connection: process.env.DATABASE_URL || "postgresql://addapet:_1c2-8Bhi60T0K__LasDIA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/addapet?sslmode=verify-full&options=--cluster%3Dclumsy-lobster-5236",
    migrations: {
      directory: __dirname + "/migrations",
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || "postgresql://addapet:_1c2-8Bhi60T0K__LasDIA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/addapet?sslmode=verify-full&options=--cluster%3Dclumsy-lobster-5236",
    migrations: {
      directory: __dirname + "/migrations",
    },
  },

};
