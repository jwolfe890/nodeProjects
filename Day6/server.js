var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  var segments = url.parse(req.url);
  console.log(segments.pathname);
  res.end("123");
});

server.listen(4200, function() {
  console.log("SERVER Started...");
});
