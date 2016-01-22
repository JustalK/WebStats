$(document).ready(function(){
	var option1 = $("#joueur1");
	var option2 = $("#resume");
	var joueur = $(option1).attr("id");
	var listCircle = [];
	var listValue = [];
	var listPlayerID = [];
	var listPlayerNAME = [];
	
	var nbrPlayer = 2;
	var inside = false;
    var insideOne = false;
	var wsc;
	var hsc;
	var offsetX,offsetY;
    
    
	var socket = io.connect("http://192.168.1.21:8081");
	socket.emit('addStats');
	
	
	// CONNECTION DES JOUEURS
	socket.on('connection', function (message) {
		// Certainement une nouvelle partie
		if(listPlayerID.length <= 4) {
			listPlayerID.push(message.id);
			listPlayerNAME.push(message.pseudo);
		} else {
			listPlayerNAME = [];
		}
		if(listPlayerID.length == 1) {
			$("#joueur1").html(message.pseudo);
		}
		if(listPlayerID.length == 2) {
			$("#joueur2").html(message.pseudo);
		}
		if(listPlayerID.length == 3) {
			$("#joueur3").html(message.pseudo);
		}
		if(listPlayerID.length == 4) {
			$("#joueur4").html(message.pseudo);
		}
		console.log("Connection de ("+message.id+") alias "+message.pseudo);
	});
	
	socket.on('updateMarker', function (message) {
		console.log("Player : ("+message.id+") x:"+message.x+" y:"+message.y);
	});

	var kill = 0;
	socket.on('killEnemy', function (message) {
		var index = 0;
		for(var i=0;i<listPlayerID.length;i++) {
			if(message.id == listPlayerID[i]) {
				index = i;
			}
		}
		if(i == 0) {
		 	$.ajax({
		 		method: "POST",
		 		url: "script/pushValue.php",
		 		async: false,
		 		data: { JOUEUR: "player1",VALUE: kill },
		 		dataType: "json",
		 		success: function(data) {
		 			console.log("test");
		 		}
		 	});	
		}
		//console.log("Player : ("+message.id+") x:"+message.x+" y:"+message.y);
	});	
	
	socket.on('pseudo', function (message) {
		console.log("Pseudo : "+message.id);
	});	
	
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
 	 	 		statistique();
 	 	 	});	
 		}
 	});
 	
 	$(".button-block-player").mouseover(function() {
 		if(option1==null || !option1.is($(this))) {
 			$(this).addClass("button-block-player-hover");
 		}
 	});
 	$(".button-block-player").mouseleave(function() {
 		if(option1==null || !option1.is($(this))) {
 			$(this).removeClass("button-block-player-hover");
 		}
 	});
 	
 	$(".button-block-player").click(function() {
 		if(option1!=null && !option1.is($(this))) {
	 		$(option1).removeClass("button-block-player-active");
	 		$(option1).removeClass("button-block-player-hover");
	 		$(option1).addClass("button-block-player");
	 		option1 = $(this);
	 		joueur = $(option1).attr("id");
	 		$(this).addClass("button-block-player-active");
	 		
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
 	 	 		statistique();
	 	 	});	
 		} else if(option1 == null) {
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