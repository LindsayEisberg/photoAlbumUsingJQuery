$(document).ready(function(){

$('a').click(function(event){
  event.preventDefault();

  var relatedClass = "." + $(this).attr('rel');
console.log(relatedClass);
});



});


//insteat of $(.post3) do $(relatedClass)
