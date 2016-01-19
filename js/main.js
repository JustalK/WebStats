$(document).ready(function(){
	var option1 = $("#joueur1");
	var option2 = $("#resume");
	var joueur = $(option1).attr("id");
	var listCircle = [];
	var listValue = [];
	var nbrPlayer = 2;
	var inside = false;
    var insideOne = false;
	var wsc;
	var hsc;
    
    
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

 	/**
 	 * Permet de remplir la liste de valeur
 	 */
 	function fillList() {
		  listValue = [];
		  listValue.push(0);
		  listValue.push(1821);
		  
		  listValue.push(2200);
		  listValue.push(2200);
		  
		  listValue.push(2200);
		  listValue.push(2200);
		  
		  listValue.push(2200);
		  listValue.push(2200);
		  
		  listValue.push(2400);
		  listValue.push(2230);
		  
		  listValue.push(2200);
		  listValue.push(2200);
		  
		  listValue.push(2200);
		  listValue.push(2200);
		  
		  listValue.push(2200);
		  listValue.push(2200);
		  
		  listValue.push(1100);
		  listValue.push(1050);
		  
		  listValue.push(600);
		  listValue.push(800);

		  listValue.push(1200);
		  listValue.push(4200);

		  listValue.push(3200);
		  listValue.push(5200);
		  

		  listValue.push(4200);
		  listValue.push(6200);

		  listValue.push(7200);
		  listValue.push(14200);

		  listValue.push(6200);
		  listValue.push(4200);

		  listValue.push(6200);
		  listValue.push(5200);

		  listValue.push(6200);
		  listValue.push(5200);
 	}
 	
 	/**
 	 * Permet de dessiner les axes et les grilles
 	 */
 	function drawGrille(W,H) {
		  var grilleElement = document.getElementById("Grille");
		  grilleElement.width = $("#graph").width();
		  grilleElement.height = $("#graph").height();
		  var ctx = grilleElement.getContext("2d");

		  // AXE HORIZONTAL CLASSIQUE

		  ctx.strokeStyle = "#666";
		  ctx.beginPath();
		  ctx.lineWidth=0.5;
		  for(var i=1; i<hsc; i++) 
		  {
			    ctx.moveTo(W/wsc, (H/hsc)*i);
			    ctx.lineTo(W-W/wsc, (H/hsc)*i);
		  }
		  
		  // AXE VERTICAL CLASSIQUE
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
		  
		  ctx.font="12px Arial";

		  
		  // Ecriture au bout des axes
		  for(var i=1; i<hsc; i++) 
		  {
			  ctx.fillText(hsc-i-1,(W/wsc)*1-16,(H/hsc)*i+6);
		  }
		  
		  var value = 0;
		  for(var i=1; i<wsc-1; i++) 
		  {
			  value = value + 2;
			  if(value<10) {
				  ctx.fillText("0"+value+":00",(W/wsc)*(i+1)-16,(H/hsc)*(hsc-1)+16);
			  } else {
				  ctx.fillText(value+":00",(W/wsc)*(i+1)-16,(H/hsc)*(hsc-1)+16);
			  }
		  }
 	}
 	
 	/**
 	 * Permet de dessiner les graphiques
 	 */
 	function drawCircle(W,H,color,player,j) {
		  var circleElement = document.getElementById(player);
		  circleElement.width = $("#graph").width();
		  circleElement.height = $("#graph").height();
		  var ctx = circleElement.getContext("2d");
 		
		  var start = j*listValue.length/2;
		  var lastCalcul,calcul;
		  
		  /**
		   * Premiere iteration : Afin que les traits se retrouve sous les cercles.
		   */
		  for(var i = 0; i < listValue.length/nbrPlayer; i++) {
			  var mod = listValue[start + i] / 1000;
			  lastCalcul = calcul;
			  calcul = (H/hsc)*(hsc-1) - mod*(H/hsc) - (listValue[start + i]/1000);
			  
			  if(i!=0) {
				  ctx.beginPath();
				  ctx.moveTo((W/wsc)+(W/wsc)*i/2,calcul);
				  ctx.lineTo((W/wsc)+(W/wsc)*(i-1)/2,lastCalcul);
				  ctx.stroke();  
			  }			  
		  }
		  
		  /**
		   * Seconde iteraction : Afin de dessiner les cercles sur les traits
		   */
		  for(var i = 0; i < listValue.length/nbrPlayer; i++) {
			  var mod = listValue[start + i] / 1000;
			  lastCalcul = calcul;
			  calcul = (H/hsc)*(hsc-1) - mod*(H/hsc) - (listValue[start + i]/1000);
			  
			  ctx.beginPath();
			  ctx.arc((W/wsc)+(W/wsc)*i/2,calcul,5,0,2*Math.PI);
		      var circle = {mousePosX:(W/wsc)+(W/wsc)*i/2,mousePosY:calcul,value:listValue[start + i]};
		      listCircle.push(circle);
			  ctx.fillStyle=color;
			  ctx.fill();
			  ctx.stroke();
		  }
 	}
 	
 	function setAxes() {
 	 	wsc=Math.ceil(Math.ceil((listValue.length + 1)/nbrPlayer)/2)+1;
 		
 		var max = 0;
 		for(var i = 0; i < listValue.length; i++) {
 			if(max<listValue[i]) {
 				max = listValue[i];
 			}
 		}
 		console.log(max+" "+Math.ceil(max/1000));
		hsc=Math.ceil(max/1000)+1+2;
 	}
 	
 	function statistique() {
 		  fillList();
 		  
		  var c = document.getElementById("LatsujA");
		  c.width = $("#graph").width();
          c.height = $("#graph").height();
          
		  var c2 = document.getElementById("LatsujB");
		  c2.width = $("#graph").width();
          c2.height = $("#graph").height();
		  var ctx = c.getContext("2d");
		  var W = c.width;
		  var H = c.height;
		  
		  setAxes();

		  drawGrille(W,H);
		  drawCircle(W,H,"red","Player1",0);
		  if(nbrPlayer == 2) {
			  drawCircle(W,H,"blue","Player2",1);
		  }
		  
		  c2.addEventListener('mousemove', function(evt) {
		        var mousePos = getMousePos(c, evt);
		        var idx;
	        	inside = false;
		        for	(index = 0; index < listCircle.length; index++) {
		        	if(mousePos.x>=listCircle[index].mousePosX-5 && mousePos.x<=listCircle[index].mousePosX+5  && mousePos.y<=listCircle[index].mousePosY+5 && mousePos.y>=listCircle[index].mousePosY-5) {
		        		inside = true;
		        		idx = index;
		        	}
		        }
		        
		        var ctx2 = c2.getContext("2d");
		        if(inside) {
		        	insideOne = false;
			        ctx2.clearRect(0, 0, c2.width, c2.height);
		        	rewrite(mousePos.x,mousePos.y,listCircle[idx].value);
		        } else {
			        ctx2.clearRect(0, 0, c2.width, c2.height);
		        	
		        }
		      }, false);
 	}
 	
 	function rewrite(X,Y,value) {
 		var c2 = document.getElementById("LatsujB");
 		var ctx2 = c2.getContext("2d");
		ctx2.fillText(value,X-16,Y-10);
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