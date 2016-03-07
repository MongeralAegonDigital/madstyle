MAD.Application = (function(){
	function Application(path, container) {
		this.path = path;
		this.container = $(container);
	}

	Application.prototype.init = function() {

		$('[data-js-module]').each(function(){
			var Module = $(this).data('js-module');
			
			if (Module) {
	      var Controller = require('./vendor/_slider'); 
				
				controller = new Controller(this.container);

	      if (controller.init) {
	        controller.init();
	      }

	      return;
	    }
		});
	}

	return Application;
})();

module.exports = MAD.Application;
