module.exports = {
  home: function(request,reply) {
    reply.file('./index.html');
  },
  favicon: function(request,reply) {
    reply.code(404);
  }
}
