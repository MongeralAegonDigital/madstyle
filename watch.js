/**
 * Main Node file
 */
var exec = require('child_process').exec,
	livereloader = require('./livereload/livereloader'),
	PORT = 9000;

function outputHandler(error, stdout) {
	console.log(stdout);
}

// Livereload server
livereloader.start(__dirname);

// Initialize Harp
exec('echo "Livereload started"', outputHandler);
exec('echo "Starting Harp.. Check your browser for: http://localhost:' + PORT + '"', outputHandler);
exec('harp server --port ' + PORT, outputHandler);