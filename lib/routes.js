const handlers=require("./handlers.js");
// const Pool = require('pg').Pool;
// const pool = new Pool({
//   host: process.env.DB_HOST || 'localhost',
//   user: 'postgres',
//   database: 'cms',
//   // password: process.env.DB_PASSWORD,
//   // port: process.env.PORT || 3000,
//   // max: 10,
//   // idleTimeoutMillis: 30000,
// });
const pg = require('pg');
const env2 = require('env2')('config.env');
const client = new pg.Client('postgres://oghbwzecpgqlzn:Eryf0t9izFvFsomMwSf66Zpj-0@ec2-54-243-202-110.compute-1.amazonaws.com:5432/d9fe6tetkoh5e');
client.connect();

module.exports = [
  {
    method: 'GET',
    path: "/",
    handler: handlers.home
  },
  {
    method: 'GET',
    path: '/getposts',
    handler: function(request, reply) {
      var select = 'SELECT * FROM users';
      client.query(select, function(err, result) {
        if (err) console.log(err);
        console.log(err, result);
        client.end();
        reply();
      });
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: './public'
      }
    }
  }
];
