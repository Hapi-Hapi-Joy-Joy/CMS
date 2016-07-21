module.exports = {
  home: function(request,reply) {
    reply.file('./index.html');
  },
  getposts: function(request,reply) {
    var select = 'SELECT * FROM blogposts';
    client.connect();
    client.query(select, function(err, result) {
      if (err) throw err;
      client.end();
      reply(result);
    });
  },
  // insertpost: function(request,reply) {
  //   var insert: 'INSERT INTO '
  // }
}
