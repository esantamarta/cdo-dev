
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var web = express();
web.use(bodyParser.json({limit: '50mb'}));
web.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes')(web);
web.set('port', (process.env.PORT || 80));

web.use('/', express.static(path.join(__dirname, 'public')));
web.use(bodyParser.json());
web.use(bodyParser.urlencoded({extended: true}));

server = web.listen(80, function() { // Parámetros (Puerto, Función Anónima)
    console.log("Sevidor arrancado.");
});
 
web.get("/", function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

/*	web.listen(web.get('80'), function() {
	  console.log('Server started: http://localhost:' + web.get('port') + '/');
	});
	*/