var Mask = MAD.Mask;

Mask = function(element, container, submodules){
    this.element = element;
    this.container = container;
    this.submodules = submodules;
}

Mask.prototype.init = function() {
    this.submodules.forEach(this.applyMasks.bind(this));
}

Mask.prototype.applyMasks = function(index) {
    if (index in this) {
        this[index]();
    }
}

Mask.prototype.date = function() {
    this.element.mask('00/00/0000');
}

Mask.prototype.cep = function() {
    this.element.mask('00000-000');
}

Mask.prototype.cpf = function() {
    this.element.mask('000.000.000-00', {reverse: true});
}

Mask.prototype.phone = function() {
    this.element.mask('(00) 0000-0000');
}

Mask.prototype.numbers = function() {
    this.element.mask('9#');
}

module.exports = Mask;