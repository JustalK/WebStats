$(document).ready(function(){
 	$(".button-block-3").mouseover(function() {
 		$(this).css('background','#f2f2f2');
 	});
 	$(".button-block-3").mouseleave(function() {
 		$(this).css('background','#FFFFFF');
 	});
 	$(".button-block-3").click(function() {
 		$(this).addClass("button-block-3-active");
 	});
}); 