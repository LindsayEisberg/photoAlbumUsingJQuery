$(document).ready(function(){

$('a').click(function(event){
  event.preventDefault();

  var relatedClass = "." + $(this).attr('rel');
  $(this).closest("li").siblings().removeClass('activeNav');
  $(this).closest('li').addClass("activeNav");
  $(relatedClass).siblings().removeClass('active');
  $(relatedClass).addClass('active');
  $('nav').addClass('active');
  console.log(relatedClass);

});

});


//insteat of $(.post3) do $(relatedClass)
