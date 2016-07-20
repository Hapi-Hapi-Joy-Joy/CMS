const Hapi=require("hapi");
const Inert=require("inert");
const routes=require('./lib/routes.js')

const server=new Hapi.Server();

server.register(Inert, () => {
  server.connection({
    port: process.env.PORT || 3000
  });
  server.route(routes)
});

server.start(function() {
  console.log("Server running at: " + server.info.uri + "!");
});

module.exports=server;
