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
    var parentName = $(event.target).data().parentName,
        target;

    event.stopPropagation();
    
    if (typeof parentName !== 'undefined') {
        target = this.element.find('[data-name="'+parentName+'"]');

        target.slideDown();
    } else {
        $(event.target).siblings().each(function(event){
            var dataVerify = $(this).data().parentName;

            if (typeof dataVerify !== 'undefined') {
                target = $('[data-name="'+dataVerify+'"]');
                target.slideUp();
            }
        });
    }
}

ToggleField.prototype.checkbox = function(event) {
    var parentName = $(event.target).data().parentName,
        target = this.element.find('[data-name="'+parentName+'"]');

    if (typeof parentName !== 'undefined') {
        if ($(event.target).is(':checked')) {
            target.slideDown();
        } else {
            target.slideUp();
        }
    }
}

module.exports = ToggleField;
