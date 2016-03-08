Application = function(modules, container) {
		this.modules = modules;
		this.container = $(container);
}

Application.prototype.init = function() {

	this.modules.each(function(){
		var module = window["MAD"][$(this).data('js-module')];

		if (typeof module === "function") {
      var initializer = new module(
        $(this),
        this.container
      );
      
      initializer.init();
    }
	});
}

module.exports = Application;
