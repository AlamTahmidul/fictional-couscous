const knex = require('knex');
const knexFile = require('./knexfile');
const env = process.env.NODE_ENV || 'development';
const configOptions = knexFile[env];

module.exports.instance = () => {
  // console.log(configOptions);
  return knex(configOptions);
}

// let knexDB;
// const connectToDB = () => {
//     knexDB = require('knex')({
//         client: 'pg',
//         connection: process.env.DATABASE_URL,
//         migrations: {
//           directories: __dirname + '/migrations',
//         },
//     });

//     return knexDB;
// }

// module.exports.instance = () => {
//     if (knexDB) return knexDB;
//     else return connectToDB();
// }