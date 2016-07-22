const pg = require('pg');
const DB =
'postgres://opupjlsb:sr8csKZSLkvRSQN3GnthLodaISoGVfjP@babar.elephantsql.com:5432/opupjlsb';
const client = new pg.Client(DB);

module.exports = {
  home: function(request,reply) {
    reply.file('./index.html');
  },
  getPosts: function (request, callback) {
  client.connect();
  let querystring = `SELECT post FROM public.posts`;
  client.query(querystring, function(err, result) {
    if (err) {
      callback(err);
      client.end();
    } else {
      callback(err, result.rows);
      client.end();
    }
  });
  },
  createPost: function(request,reply) {
    var postContent = request.payload.content;
    var postTitle = request.payload.title;
    client.connect();
    client.query(`INSERT INTO public.posts(title, post) VALUES ($1, $2)`, [postTitle, postContent], function(err) {
      if (err) console.log(err);
      client.end();
      reply('Success').code(201);
    });
  }
}
