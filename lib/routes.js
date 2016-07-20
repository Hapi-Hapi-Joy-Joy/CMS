const handlers=require("./handlers.js");
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
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
        if (err) throw err;
        client.end();
        reply(result);
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
