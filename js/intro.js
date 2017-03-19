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

  
    
  $('h1.typebyletter').TypeByLetter({
    speed: 150,
    callback: function()
      {
  $('p.typebyletter').TypeByLetter({
    speed: 50,
    content: "As the party was winding down CEO, Richard DeVaul, went into his office to retrieve a speech he prepared. After not returned for some time, a coworker went looking for him in his office only to find him dead on the ground. The police were called and an investigation into the murder of Richard DeVaul was launched, but no arrests were ever made and eventually the case went cold... Years later new evidence resurfaced, and the case has been re-opened. Find clues and bring the murderer to justice… you’re on the case."
      });
    }
  });
});