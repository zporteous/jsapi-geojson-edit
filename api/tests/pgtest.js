require('dotenv').config()
const { Pool, Client } = require('pg')

console.log(typeof process.env.PGPASSWORD)


const client = new Client()
client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack));

client
  .query('SELECT NOW()')
  .then(result => console.log(result.rows))
  .catch(e => console.error(e.stack))
  .then(() => client.end())

