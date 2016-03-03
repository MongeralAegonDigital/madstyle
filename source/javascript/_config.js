'use strict';

global.$ = global.jQuery = require('jquery');

// Namespace
global.MAD = global.MAD || {};

var Mediator = require("mediator-js").Mediator;
MAD.mediator = new Mediator();
