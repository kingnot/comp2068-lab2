var http = require('http');

//require the node's url module to parse the url's query string
var url = require('url');

//create the server to run the page
http.createServer(function (req, res) {

	//get the query string
	var qs = url.parse(req.url, true).query;

	//parse the x and y value as float value
	var X = parseFloat(qs.x);
	var Y = parseFloat(qs.y);

	var result;

	//calculate the result of x and y, depending on method parameter and output the full math operation and result
	if (qs.method === 'add') {
		result = (X + Y);
		res.write('<h1> Simple Math Calculator </h1>' + X  + ' + ' + Y + ' = ' + result);
	}
	else if (qs.method === 'subtract') {
		result = (X - Y);
		res.write('<h1> Simple Math Calculator </h1>' + X  + ' - ' + Y + ' = ' + result);
	}
	else if (qs.method === 'multiply') {
		result = (X * Y);
		res.write('<h1> Simple Math Calculator </h1>' + X  + ' * ' + Y + ' = ' + result);
	}
	else if (qs.method === 'divide') {
		result = (X / Y);
		res.write('<h1> Simple Math Calculator </h1>' + X  + ' / ' + Y + ' = ' + result);
	}
	else {
		res.write('<h1> Wrong input!</h1><h3>Please input the correct math operator,</h3><h3>operator could be one of: add, subtract, multiply or divide</h3>');
	}

	res.end();

}).listen(3000);		//page runs at http://localhost:3000/lab2.js?method=[method_name]&x=16&y=4
