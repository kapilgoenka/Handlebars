var express = require("express"),
    app = express.createServer();
app.use(express.static(__dirname));
app.use('/js/templates', express.static(__dirname) + '/js/templates');
app.use('/data', express.static(__dirname) + '/data');
app.listen(3001);
