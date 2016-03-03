// Applicantion dependency
MAD.Application = require('./_application');

$(function(){
  // Initialize an application instance.
  // I must receive the body element as the container.
  var app = new MAD.Application(
    location.pathname,
    document.body
  );

  // Just start the application.
  app.init();
});