var ToggleField = MAD.ToggleField;

ToggleField = function(element, container){
    this.element = element;
    this.container = container;
}

ToggleField.prototype.init = function() {
    this.actionButton = this.element.find('[data-parent-name]');

    this.actionButton.parent().on("change", this.showHide.bind(this));
}

ToggleField.prototype.showHide = function(event) {
    var actionValue = this.actionButton.data(),
        target = this.element.find('[data-name="'+actionValue.parentName+'"]');

    target.slideToggle();
}

module.exports = ToggleField;
