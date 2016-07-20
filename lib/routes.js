const handlers=require("./handlers.js");

module.exports = [
  {
    method: 'GET',
    path: "/",
    handler: handlers.home
  },

  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: './public'
      }
    }
  },

  {
    method: 'GET',
    path: '/getposts',
    handler: function(request, reply) {
      var select = escape('select * from users');
      request.pg.client.query(select, function(err, result) {
        console.log(err, result);
        return reply();
      })
    }
  }
];
