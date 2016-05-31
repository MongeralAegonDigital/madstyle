var ToggleInputYesOrNo = MAD.ToggleInputYesOrNo;

ToggleInputYesOrNo = function(element, container){
    this.element = element;
    this.container = container;
}

ToggleInputYesOrNo.prototype.init = function() {
    this.target = this.element.find(".input-group").first();
    
    this.element.find('input[type="radio"]').on("click", this.verifyTarget.bind(this));
}

ToggleInputYesOrNo.prototype.verifyTarget = function(event) {
    var target = this.element.data("js-target");

    if (target) {
        this.target = $(this.container.find("."+target));
    }

    this.showHide(event);
}

ToggleInputYesOrNo.prototype.showHide = function(event) {
    var answer = event.target.value;

    if (answer === "1") {
        this.target.slideDown();
    } else {
        this.target.slideUp();
    }
}

module.exports = ToggleInputYesOrNo;