var Application = MAD.Application;

Application = function(modules, container) {
		this.modules = modules;
		this.container = $(container);
}

Application.prototype.init = function() {

	this.modules.each(function(){
		var module = $(this).data('js-module');

		// ----------- REFATORAR ------------- //
		// Adaptando o valor pego do data
		// para o modelo adotado no js
		// retirando '-' e deixando maiusculo
		module = module.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })
		
		// Deixando a primeira letra maiuscula
		module = module.charAt(0).toUpperCase() + module.substr(1);

		// ----------------------------------- //

		module = window["MAD"][module];

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
