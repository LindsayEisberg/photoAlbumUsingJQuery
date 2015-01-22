$(document).ready(function(){

$('a').click(function(event){
  event.preventDefault();

  var relatedClass = "." + $(this).attr('rel');
  $(this).closest("li").siblings().removeClass('activeNav');
  $(this).closest('li').addClass("activeNav");
  $(relatedClass).siblings().removeClass('active');
  $(relatedClass).addClass('active');
  $('nav').addClass('active');
  $(this).parent().removeClass('active');
  $('.image').html('<img src="'+$(this).data('photo')+'">').addClass('active');


  });
//   $('img').click(function(event){
//     event.preventDefault();
//     $('nav').removeClass('active');
//
// });
});


//insteat of $(.post3) do $(relatedClass)
