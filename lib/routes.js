const handlers=require("./handlers.js");

module.exports = [
  {
    method: 'GET',
    path: "/",
    handler: handlers.home
  }
]
