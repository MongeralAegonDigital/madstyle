var Textarea = MAD.Textarea;

Textarea = function(container){
    this.element = element;
    this.container = container;
}

Textarea.prototype.init = function() {
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }

    $('textarea').each(function () {
      var $textarea = $(this);
      if ($textarea.val().length) {
        textareaAutoResize($textarea);
      }
    });

    $('body').on('keyup keydown autoresize', 'textarea', function () {
      textareaAutoResize($(this));
    });
}

Textarea.prototype.AutoResize = function($textarea) {
    var fontFamily = $textarea.css('font-family');
    var fontSize = $textarea.css('font-size');

    if (fontSize) { hiddenDiv.css('font-size', fontSize); }
    if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }

    if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal")
                 .css('white-space', "pre");
    }

    hiddenDiv.text($textarea.val() + '\n');
    var content = hiddenDiv.html().replace(/\n/g, '<br>');
    hiddenDiv.html(content);

    // When textarea is hidden, width goes crazy.
    // Approximate with half of window size

    if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
    }
    else {
        hiddenDiv.css('width', $(window).width()/2);
    }

    $textarea.css('height', hiddenDiv.height());
}

module.exports = Textarea;
