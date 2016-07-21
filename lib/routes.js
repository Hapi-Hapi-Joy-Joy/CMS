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
    handler: handlers.getposts
  },
  {
    method: 'POST',
    path: '/blogpost', //this inserts into blogposts
    handler: function(request,reply) {
      var post = 'INSERT INTO blogposts(post) VALUES ($1)';
      client.query(post, function(err) {
        if (err) console.log(err);
        client.end();
        reply().code(201);
      });
    }
  },
  // {
  //   method: 'Post',
  //   path: '/user',  //this insert new user into user table
  //   handler:
  // },
  // {
  //   method: 'Put',
  //   path: '/updatepost', //this updates an existing post
  // },
  // {
  //   method: ''
  // },
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
