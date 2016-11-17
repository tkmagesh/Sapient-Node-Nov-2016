var http = require('http'),
	dataParser = require('./dataParser'),
	staticServer = require('./staticServer'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app'),
	path = require('path');

app.use(dataParser);
app.use(staticServer(path.join(__dirname, 'public')));
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);