/**
 * Main Node file
 */
var exec = require('child_process').exec,
	livereloader = require('./livereload/livereloader'),
	PORT = 9000,
	fs = require('fs'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	b = browserify({
	  entries: ['./source/javascript/_modules.js', './source/javascript/core/_config.js', './source/javascript/core/_initial.js'],
	  cache: {},
	  packageCache: {},
	  plugin: [watchify]
	});

function outputHandler(error, stdout) {
	console.log(stdout);
}

function bundle() {
  b.bundle().pipe(fs.createWriteStream('./docs/assets/javascript/main.js'));
}

b.on('update', bundle);
bundle();

// Livereload server
livereloader.start(__dirname);

// Initialize Harp
exec('echo "Livereload started"', outputHandler);
exec('echo "Starting Harp.. Check your browser for: http://localhost:' + PORT + '"', outputHandler);
exec('harp server --port ' + PORT, outputHandler);