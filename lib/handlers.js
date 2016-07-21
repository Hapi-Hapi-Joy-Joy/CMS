const pg = require('pg');
const DB =
'postgres://opupjlsb:sr8csKZSLkvRSQN3GnthLodaISoGVfjP@babar.elephantsql.com:5432/opupjlsb';
const client = new pg.Client(DB);

module.exports = {
  home: function(request,reply) {
    reply.file('./index.html');
  },
  getPosts:
  // function(request,reply) {
    // var select = `SELECT * FROM public.posts
    //             ORDER BY id DESC
    //             LIMIT 20`;
    // client.connect();
    // client.query(`SELECT * FROM public.posts`, function(err, result) {
    //   if (err) console.log(err);
    //   console.log('Yay!');
    //   client.end();
    //   reply(result).code(200);
    // });
    function (request, callback) {
  client.connect();
  let querystring = `SELECT * FROM public.posts`;
  client.query(querystring, function(err, result) {
    if (err) {
      callback(err);
      client.end();
    } else {
      console.log('Yay!');
      callback(err, result.rows);
      client.end();
    }
  });
  },
  createPost: function(request,reply) {
    var postContent = request.payload.post;
    client.connect();
    client.query(`INSERT INTO public.posts(post) VALUES ($1)`, [postContent], function(err) {
      if (err) console.log(err);
      client.end();
      reply().code(201);
    });
  }
}
