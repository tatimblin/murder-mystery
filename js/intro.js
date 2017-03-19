$(function(){
   $.fn.TypeByLetter = function(options) {
    var settings = $.extend({
      speed: 100,
      content: $(this).text(),
      append: false,
      callback: function() {}
    }, options);

    return this.each(function() {

      var $object = $(this);
      var text = " " + settings.content;
      var arrayOfText = text.split("");
      if (settings.append == false) {
        $object.text("");
      }

      function type(i) {
        i = i || 0;
        $object.append(arrayOfText[i]);
        console.log(arrayOfText[i]);
        if (i < arrayOfText.length) {
          i++;
          setTimeout(function() {
            type(i)
          }, settings.speed);
        } else {
          settings.callback.call();
        }
      }

      type(0);
    });

  };

  
    
  $('p.typebyletter').TypeByLetter({
    speed: 30,
    callback: function()
      {
  $('span.typebyletter').TypeByLetter({
    speed: 150,
    content: "Created By ME!"
      });
    }
  });
});