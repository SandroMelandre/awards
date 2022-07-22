import pgPromise from 'pg-promise';
const pg = pgPromise({});



// const pgp = require('pg-promise')();
// const db = pgp({
// 	user: 'sammy',
// 	password: 'your_password',
// 	host: 'localhost',
// 	port: 5432,
// 	database: 'award'
// });

// module.exports = db;

export const dbp = pg
export const db = pg("postgres://sammy:your_password@localhost:5432/award");