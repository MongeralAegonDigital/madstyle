var ToggleField = MAD.ToggleField;

ToggleField = function(element, container){
    this.element = element;
    this.container = container;
}

ToggleField.prototype.init = function() {
    this.element.find('[data-parent-name]').parent().on("change", this.showHide.bind(this));
}

ToggleField.prototype.showHide = function(event) {
    var target = this.element.find('[data-name]');
    target.slideToggle();
}

module.exports = ToggleField;
