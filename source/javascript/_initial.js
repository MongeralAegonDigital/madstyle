'use strict';

global.$ = global.jQuery = require('jquery');

// Namespace
global.MAG = global.MAG || {};

var Mediator = require("mediator-js").Mediator;
MAG.mediator = new Mediator();
