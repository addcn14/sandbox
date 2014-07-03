$(document).ready(
  var hovr = function(thing, clas){//clas is the class because class is defined in js already.
  $(thing).hover(function(){
    $(thing).addClass(clas)
  }, function(){
    $(thing).removeClass(clas)
  })
  }//end for var function
  hovr("div", "blue")
  )
  
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
