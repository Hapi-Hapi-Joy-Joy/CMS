const test = require("tape");
const server = require('../server.js');

test("'/' return 200 statusCode", t => {
  server.inject({method: 'Get', url: '/'}, function (res) {
    t.equal(res.statusCode, 200, 'page loaded successfully');
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
