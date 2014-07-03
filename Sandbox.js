$(document).ready(function(){
  var thing = prompt("What object are you changing? There is only the \"div\" availible right now.")
  var clas = prompt("What color would you like to have it change to?\nRGB, Hex, etc. all work.")
  var hovr = function(thing, clas){//clas is the class because class is defined in js already.
  var first = $(thing).css("background-color")
  $(thing).hover(function(){
    $(thing).css("background-color",clas)
  }, function(){
    $(thing).css("background-color",first)
  })
  }//end for var function
  hovr(thing, clas)
  })
  
/*BKUP
$(document).ready(
  function(){//clas is the class because class is defined in js already.
  $('div').hover(function(){
    $('div').addClass('blue')
  }, function(){
    $('div').removeClass('blue')
  })
  })
  
*/
