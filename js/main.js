$(document).ready(function(){
	var option1 = $("#joueur1");
	var option2 = $("#resume");
	var joueur = $(option1).attr("id");
	
 	$(".button-block-3").mouseover(function() {
 		$(this).css('background','#e5e9e9');
 	});
 	$(".button-block-3").mouseleave(function() {
 		if(!option2.is($(this))) {
 	 		$(this).css('background','#FFFFFF');
 		}
 	});
 	
 	$(".button-block-3").click(function() {
 		if(!option2.is($(this))) {
	 		$(option2).removeClass("button-block-3-active");
	 		$(option2).addClass("button-block-3");
	 		$(option2).css('background','#FFFFFF');
	 		option2 = $(this);
	 		$(this).addClass("button-block-3-active");
	 		var page;
	 		if(option2.is($("#resume"))) {
	 	 	 	page = "resume.php";
	 		} else if(option2.is($("#statistique"))) {
	 			page = "statistique.php";			
	 		} else {
	 			page = "live.php";
	 		}
 	 	 	$.ajax({
 	 	 		method: "POST",
 	 	 		data: { JOUEUR: joueur },
 	 	 		url: page,
 	 	 		cache: false
 	 	 	}).done(function( html ) {
 	 	 		$( "#results" ).empty();
 	 	 		$( "#results" ).append( html );
 	 	 	});	
 		}
 	});

 	$(".button-block-player").mouseover(function() {
 		if(!option1.is($(this))) {
 			$(this).addClass("button-block-player-hover");
 		}
 	});
 	$(".button-block-player").mouseleave(function() {
 		if(!option1.is($(this))) {
 			$(this).removeClass("button-block-player-hover");
 		}
 	});
 	
 	$(".button-block-player").click(function() {
 		if(!option1.is($(this))) {
	 		$(option1).removeClass("button-block-player-active");
	 		$(option1).removeClass("button-block-player-hover");
	 		$(option1).addClass("button-block-player");
	 		option1 = $(this);
	 		joueur = $(option1).attr("id");
	 		$(this).addClass("button-block-player-active");
 		}
 	}); 	
 	
 	init();
 	function init() {
 		$(option2).addClass("button-block-3-active");
 		$(option1).addClass("button-block-player-active");
 	 	$.ajax({
 	 		method: "POST",
 	 		data: { JOUEUR: joueur },
 	 		url: "resume.php",
 	 		cache: false
 	 	}).done(function( html ) {
 	 		$( "#results" ).empty();
 	 		$( "#results" ).append( html );
 	 	});	
 	}
}); 