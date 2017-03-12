
var correct = 0;
var murderer = 0;

// Select a suspect to accuse
$("#sus-edwin").click(function() {
    $('#accuseSuspect').html("Edwin Bolman");
    correct = 0;
    murderer = 0;
});
$("#sus-theodore").click(function() {
    $('#accuseSuspect').html("Theodore Tresler");
    correct = 0;
    murderer = 1;
});
$("#sus-alice").click(function() {
    $('#accuseSuspect').html("Alice Roberts");
    correct = 0;
    murderer = 0;
});
$("#sus-simon").click(function() {
    $('#accuseSuspect').html("Simon Devaul");
    correct = 0;
    murderer = 0;
});
$("#sus-carl").click(function() {
    $('#accuseSuspect').html("William Hedberg");
    correct = 0;
    murderer = 0;
});

// When pressing accused button
$(".accuse-btn").click(function() {
    var accuseSuspect = $('#accuseSuspect').text();
    console.log('Accused! ' + accuseSuspect);
    arraysEqual()
});

// Check if arrays are equal
function arraysEqual() {
    
    var values = [3, 2, 0, 1, 3, 0, 1, 3, 1, 1, 0, 1, 2, 0, 0];
    var selected = [];
    
    for(cnt = 0; cnt < values.length; cnt++) {
        var toSelected  = JSON.parse(localStorage.getItem(cnt));
        console.log(toSelected);
        selected.push(toSelected);
        //localStorage.getItem(i)
    }
    
    if(values.length !== selected.length)
        return false;
    console.log('if');
    for(var i = values.length; i--;) {
        if(values[i] !== selected[i]) {
            console.log('Not Equal');
        } else {
            console.log('Equal');
            correct++
        }
    }
    console.log(correct);
    var needed = (values.length - 3) - correct;
    if (correct > needed) {
        if (murderer == 1) {
            console.log("You Got Him/Her!")
            // Correct
            $('#accuseScore').html("You've cracked the case!");
        } else {
            console.log("Guess Again")
            // Wrong suspect
            $('#accuseScore').html("Check The Evidence Again.");
        }
    } else {
        // Not enough correct
        $('#accuseScore').html("Your case isn't strong enough.");
    }
}

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
    speed: 200,
    callback: function()
      {
  $('span.typebyletter').TypeByLetter({
    speed: 150,
    content: "Created By ME!"
      });
    }
  });
});


