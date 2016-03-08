Application = function(path, container) {
		this.path = path;
		this.container = $(container);
}

Application.prototype.init = function() {

	$('[data-js-module]').each(function(){
		var Controller = $(this).data('js-module');
		
		if (Controller) {
			controller = new Controller(this.container);

      if (controller.init) {
        controller.init();
      }

      return;
    }
	});
}

module.exports = Application;
