var ToggleInput = MAD.ToggleInput;

ToggleInput = function(element, container){
    this.element = element;
    this.container = container;
}

ToggleInput.prototype.init = function() {
    this.target = this.element.find(".input-group");
    
    this.element.find('input[type="radio"]').on("click", this.verifyTarget.bind(this));
}

ToggleInput.prototype.verifyTarget = function() {
    var target = this.element.data("js-target");

    if (target) {
        this.target = $(this.container.find("."+target));
    }

    this.showHide();
}

ToggleInput.prototype.showHide = function() {
    var answer = event.target.value;

    if (answer === "1") {
        this.target.slideDown();
    } else {
        this.target.slideUp();
    }
}

module.exports = ToggleInput;