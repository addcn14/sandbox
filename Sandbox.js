$(document).ready(var hovr = function(part, clas){//clas is the class because class is defined n js already.
  $(part).hover(function(){
    $(part).addClass(clas)
  }, function(){
    $(part).removeClass(clas)
  })
  }
  hovr("div", "blue")
  )
  
