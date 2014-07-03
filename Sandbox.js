//var hovr = 
$(document).ready(
  function(part, clas){//clas is the class because class is defined in js already.
  $(part).hover(function(){
    $(part).addClass(clas)
  }, function(){
    $(part).removeClass(clas)
  })
  }
  //hovr("div", "blue")
  )
  
