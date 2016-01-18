$(document).ready(function(){
	var option1 = $("#joueur1");
	var option2 = $("#resume");
	var joueur = $(option1).attr("id");
	var listCircle = [];
	var inside = false;
    var insideOne = false;
	
	var socket = io.connect("http://192.168.1.21:8081");
	socket.emit('addTable');
	
	socket.on('marker', function (message) {
		console.log("Launching Game with "+message.id+" player(s)");
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

 	function statistique() {
		  var c = document.getElementById("LatsujA");
		  c.width = $("#graph").width();
          c.height = $("#graph").height();
		  var ctx = c.getContext("2d");
		  var W = c.width;
		  var H = c.height;
		  
		  var wsc=10,hsc=12;
		  ctx.strokeStyle = "#666";
		  ctx.beginPath();
		  ctx.lineWidth=0.5;
		  ctx.font="12px Arial";
		  for(var i=1; i<hsc; i++) 
		  {
			    ctx.moveTo(W/wsc, (H/hsc)*i);
			    ctx.lineTo(W-W/wsc, (H/hsc)*i);
		  }
		  for(var i=1; i<wsc; i++) {
			    ctx.moveTo((W/wsc)*i,(H/hsc)*(hsc-1));
			    ctx.lineTo((W/wsc)*i, (H/hsc));
		  }
		  ctx.stroke();

		  // AXE VERTICAL EN NOIR
		  ctx.beginPath();
		  ctx.strokeStyle = "#000000";
		  ctx.lineWidth=1.5;
		  ctx.moveTo(W/wsc, (H/hsc)*1);
		  ctx.lineTo(W-W/wsc, (H/hsc)*1);
		  ctx.moveTo(W/wsc, (H/hsc)*(hsc-1));
		  ctx.lineTo(W-W/wsc, (H/hsc)*(hsc-1));
		  ctx.stroke();

		  // AXE HORIZONTAL EN NOIR
		  ctx.beginPath();
		  ctx.strokeStyle = "#000000";
		  ctx.lineWidth=1.5;
		  ctx.moveTo((W/wsc)*1,(H/hsc)*(hsc-1));
		  ctx.lineTo((W/wsc)*1, (H/hsc));
		  ctx.moveTo((W/wsc)*(wsc-1),(H/hsc)*(hsc-1));
		  ctx.lineTo((W/wsc)*(wsc-1), (H/hsc));
		  ctx.stroke();
		  
		  // Ecriture au bout des axes
		  for(var i=1; i<hsc; i++) 
		  {
			  ctx.fillText(hsc-i-1,(W/wsc)*1-16,(H/hsc)*i+6);
		  }
		  
		  for(var i=1; i<wsc-1; i++) 
		  {
			  ctx.fillText("00:00",(W/wsc)*(i+1)-16,(H/hsc)*(hsc-1)+16);
		  }
		  
		  ctx.beginPath();
		  ctx.arc((W/wsc)*1,(H/hsc)*(hsc-1),5,0,2*Math.PI);
	      var circle = {mousePosX:(W/wsc)*1,mousePosY:(H/hsc)*(hsc-1)};
	      listCircle.push(circle);
		  ctx.fillStyle="red";
		  ctx.fill();
		  ctx.stroke();

		  ctx.beginPath();
		  ctx.arc((W/wsc)*1+16,(H/hsc)*(hsc-1)-20,5,0,2*Math.PI);
	      var circle = {mousePosX:(W/wsc)*1+16,mousePosY:(H/hsc)*(hsc-1)-20};
	      listCircle.push(circle);
		  ctx.fillStyle="red";
		  ctx.fill();
		  ctx.stroke();
		  

		  c.addEventListener('mousemove', function(evt) {
		        var mousePos = getMousePos(c, evt);
	        	inside = false;
		        for	(index = 0; index < listCircle.length; index++) {
		        	if(mousePos.x>=listCircle[index].mousePosX-5 && mousePos.x<=listCircle[index].mousePosX+5  && mousePos.y<=listCircle[index].mousePosY+5 && mousePos.y>=listCircle[index].mousePosY-5) {
		        		/**
		        		**/
		        		inside = true;
		        	}
		        }
		        
		        if(!inside) {
		        	console.log("bbbbb");
		        	insideOne = true;
		        	inside = false;
		        }
		        if(inside && insideOne) {
		        	insideOne = false;
		        	rewrite();
		  		  	ctx.fillText("00:00",mousePos.x-16,mousePos.y+16);
		        }
		      }, false);
 	}
 	
 	function rewrite() {
		  var c = document.getElementById("LatsujA");
		  c.width = $("#graph").width();
          c.height = $("#graph").height();
		  var ctx = c.getContext("2d");
		  var W = c.width;
		  var H = c.height;
		  
		  var wsc=10,hsc=12;
		  ctx.clearRect(0, 0, c.width, c.height);
		  ctx.beginPath();
		  ctx.fillStyle="black";
		  ctx.lineWidth=0.5;
		  ctx.font="12px Arial";
		  for(var i=1; i<hsc; i++) 
		  {
			    ctx.moveTo(W/wsc, (H/hsc)*i);
			    ctx.lineTo(W-W/wsc, (H/hsc)*i);
		  }
		  for(var i=1; i<wsc; i++) {
			    ctx.moveTo((W/wsc)*i,(H/hsc)*(hsc-1));
			    ctx.lineTo((W/wsc)*i, (H/hsc));
		  }
		  ctx.stroke();
		  
		  ctx.beginPath();
		  ctx.strokeStyle = "#000000";
		  ctx.lineWidth=1.5;
		  ctx.moveTo(W/wsc, (H/hsc)*1);
		  ctx.lineTo(W-W/wsc, (H/hsc)*1);
		  ctx.moveTo(W/wsc, (H/hsc)*(hsc-1));
		  ctx.lineTo(W-W/wsc, (H/hsc)*(hsc-1));
		  ctx.stroke();

		  // AXE HORIZONTAL EN NOIR
		  ctx.beginPath();
		  ctx.strokeStyle = "#000000";
		  ctx.lineWidth=1.5;
		  ctx.moveTo((W/wsc)*1,(H/hsc)*(hsc-1));
		  ctx.lineTo((W/wsc)*1, (H/hsc));
		  ctx.moveTo((W/wsc)*(wsc-1),(H/hsc)*(hsc-1));
		  ctx.lineTo((W/wsc)*(wsc-1), (H/hsc));
		  ctx.stroke();
		  
		  // Ecriture au bout des axes
		  for(var i=1; i<hsc; i++) 
		  {
			  ctx.fillText(hsc-i-1,(W/wsc)*1-16,(H/hsc)*i+6);
		  }
		  
		  for(var i=1; i<wsc-1; i++) 
		  {
			  ctx.fillText("00:00",(W/wsc)*(i+1)-16,(H/hsc)*(hsc-1)+16);
		  }
		  
		  
		  ctx.beginPath();
		  ctx.arc((W/wsc)*1,(H/hsc)*(hsc-1),5,0,2*Math.PI);
	      var circle = {mousePosX:(W/wsc)*1,mousePosY:(H/hsc)*(hsc-1)};
	      listCircle.push(circle);
		  ctx.fillStyle="red";
		  ctx.fill();
		  ctx.stroke();
		  
		  ctx.beginPath();
		  ctx.arc((W/wsc)*1+16,(H/hsc)*(hsc-1)-20,5,0,2*Math.PI);
	      var circle = {mousePosX:(W/wsc)*1+16,mousePosY:(H/hsc)*(hsc-1)-20};
	      listCircle.push(circle);
		  ctx.fillStyle="red";
		  ctx.fill();
		  ctx.stroke();
		  
 	}
 	
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: (evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width,
          y: (evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height
        };
    }
 	
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