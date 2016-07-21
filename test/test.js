const test = require("tape");
const server = require('../server.js');

test("'/' return 200 statusCode", t => {
  server.inject({method: 'Get', url: '/'}, function (res) {
    t.equal(res.statusCode, 200, 'page loaded successfully');
    t.end();
  });
});

test("'/createPost' return 201 statusCode", t => {
  var payload = {post: 'hi'};
  server.inject({method: 'POST', url: '/createPost', payload}, function (res) {
    t.equal(res.statusCode, 201, 'post inserted successfully');
    t.end();
  });
});

test("'/getPosts' returns a post", t => {
  var payload = {post: 'done'};
  server.inject({method: 'GET', url: '/getPosts', payload}, function (res) {
    t.deepEqual(payload.post, 'done', 'blog post successfully retrieved a post');
    t.end();
  });
});

test("'/{file*}' returns 200 statusCode", t => {
  server.inject({ method: 'Get', url: '/main.css' },
  res => {
    t.equal(res.statusCode, 200, 'static file retieved');
    t.end();
  });
});
