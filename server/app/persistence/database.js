module.exports = function() {

	var mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/lampdb');

	mongoose.connection.on('connected', function() {
		console.log('Sucessfully connected to mongodb');
	});

	mongoose.connection.on('error', function(error) {
		console.log('Failed to connect to mongodb: ' + error);
	});	

	mongoose.connection.on('disconnected', function() {
		console.log('disconnected from MongoDB');
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('App finished, connection closed');
			process.exit(0);
		});
		
	})
};


