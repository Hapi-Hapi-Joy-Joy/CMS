const test = require("tape");
const server = require('../server.js');

test("'/' return 200 statusCode", t => {
  server.inject({method: 'GET', url: '/'}, function (res) {
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

//make the test for PUT
// test("'/updatePosts' returns an updated post", t => {
//   var payload = {post: 'new info'};
//   server.inject({method: 'PUT', url: '/updatePosts', payload}, function (res) {
//     change the below deepEqal to be 'includes'
//     t.deepEqual(payload.post, 'new info', 'blog post successfully updated');
//     t.end();
//   });
// });

test("'/{file*}' returns 200 statusCode", t => {
  server.inject({ method: 'Get', url: '/styles.css' },
  res => {
    t.equal(res.statusCode, 200, 'static file retieved');
    t.end();
  });
});
