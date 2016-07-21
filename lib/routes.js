const handlers= require("./handlers.js");
const pg = require('pg');
const DB =
'postgres://opupjlsb:sr8csKZSLkvRSQN3GnthLodaISoGVfjP@babar.elephantsql.com:5432/opupjlsb';
const client = new pg.Client(DB);

client.connect();


module.exports = [
  {
    method: 'GET',
    path: "/",
    handler: handlers.home
  },
  {
    method: 'GET',
    path: '/getPosts',
    handler: handlers.getPosts
  },
  {
    method: 'POST',
    path: '/createPost',
    handler: handlers.createPost
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
