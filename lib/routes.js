const handlers= require("./handlers.js");
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);


module.exports = [
  {
    method: 'GET',
    path: "/",
    handler: handlers.home
  },
  {
    method: 'GET',
    path: '/getposts', //gets all the posts, can be updated to return a number of recent posts
    handler: function(request, reply) {
      var select = 'SELECT * FROM blogposts';
      client.connect();
      client.query(select, function(err, result) {
        if (err) throw err;
        client.end();
        reply(result);
      });
    }
  },
  {
    method: 'Post',
    path: '/blogpost' //this inserts into blogposts
    handler: function(request, reply) {
      var post = 'insert into blogposts';
      client.query(post, function(err) {
        if (err) throw err;
        client.end();
        reply();
      });
    }
  },
  {
    method: 'Post',
    path: '/user',  //this insert new user into user table
    handler:
  },
  {
    method: 'Put',
    path: '/updatepost', //this updates an existing post
  },
  {
    method: ''
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
