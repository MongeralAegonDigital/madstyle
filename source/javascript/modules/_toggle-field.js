var ToggleField = MAD.ToggleField;

ToggleField = function(element, container){
    this.element = element;
    this.container = container;
}

ToggleField.prototype.init = function() {
    this.element.find('[data-parent-name]').closest('.form-input-select').on("change", this.showHide.bind(this));
}

ToggleField.prototype.showHide = function(event) {
    var target = this.element.find('[data-name]');
    target.toggle();
}

module.exports = ToggleField;