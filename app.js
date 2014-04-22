var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.end('w000tadafook!!');
});

app.listen(process.env.PORT || 3001);