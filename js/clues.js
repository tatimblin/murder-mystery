var currentIndex = 0,
    items = $('.clue-container div'),
    itemsAmount = items.length;

function cycleItems(){
  var item = $('.clue-container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}



$('.clue-next').click(function(){
  currentIndex += 1;
  if(currentIndex > itemsAmount - 1){
    currentIndex = 0;
  }
  cycleItems();
});

$('.clue-prev').click(function(){
  currentIndex -= 1;
  if(currentIndex < 0){
    currentIndex = itemsAmount - 1;
  }
  cycleItems();
});

