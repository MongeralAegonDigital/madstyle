// Applicantion dependencies
MAD.Slider = require('./vendor/_slider');
MAD.Application = require('./_application');

$(function(){
  // Initialize an application instance.
  // I must receive the body element as the container.
  var app = new MAD.Application(
    $('[data-js-module]'),
    document.body
  );
  // Just start the application.
  app.init();
  
});