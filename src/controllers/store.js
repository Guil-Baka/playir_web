var data = {};
readFiles('dirname/', function (filename, content) {
  data[filename] = content;
}, function (err) {
  throw err;
});