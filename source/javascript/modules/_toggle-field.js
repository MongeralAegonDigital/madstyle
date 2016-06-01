var ToggleField = MAD.ToggleField;

ToggleField = function(element, container, submodules){
    this.element = element;
    this.container = container;
    this.submodules = submodules;
}

ToggleField.prototype.init = function() {
    this.submodules.forEach(this.applyFields.bind(this));
}

ToggleField.prototype.applyFields = function(index) {
    this.actionButton = this.element.find('[data-parent-name]');

    if (index in this) {
        this.actionButton.parent().on("change", this[index].bind(this));
    }
}

ToggleField.prototype.select = function(event) {
    var actionValue = this.actionButton.data(),
        target = this.element.find('[data-name="'+actionValue.parentName+'"]'),
        selectVerify = $(event.target).find('option:selected').data().parentName;

    if (selectVerify) {
        target.slideDown();
    } else {
        target.slideUp();
    }
}

ToggleField.prototype.radio = function(event) {
    var actionValue = this.actionButton.data(),
        target = this.element.find('[data-name="'+actionValue.parentName+'"]');

    target.slideToggle();
}

module.exports = ToggleField;
