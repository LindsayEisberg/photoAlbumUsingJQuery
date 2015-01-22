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




  });




  $('article a').click(function(event){
    event.preventDefault();
    $('nav').removeClass('active');
    $('.image').html('<img src="'+$(this).data('photo')+'">').addClass('activeImage');
    $('.image').siblings('h3').addClass('active').attr("data-album", $(this).data('album'));
    $('.image').parent('.lgImage').addClass('active');
  });

  $('h3').click(function(event){
    event.preventDefault();
    $(this).removeClass('active');
    $(this).siblings().removeClass('activeImage');
    $(this).parent().removeClass('active');
    $('.' + $(this).data('album')).addClass('active');
    $('nav').addClass('active');
  });

  // $('.image').hover(function(event){
  //   event.preventDefault();
  //   $(this).css('transform', 'scale(1.5)' );
  //   $(this).css('transform-origin', '0 0');
  //
  //
  // });
//
// $('.image img').click(function(event){
//   event.preventDefault();
//
//   $(this).removeClass('active');
//   $(this).
//   ('nav').addClass('active');
//
//
// });
//



});
