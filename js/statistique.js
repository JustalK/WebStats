var joueur = $("#joueur").html();
var listCircle = [];
var listValue = [];
var listPlayer = [];
var nbrPlayer = 1;
var inside = false;
var insideOne = false;
var wsc;
var hsc;
var offsetX,offsetY;

var grilleElement = document.getElementById("Grille");
var mouseGrilleElement = document.getElementById("MouseGrille");
var texteElement = document.getElementById("Texte");
var planElement = document.getElementById("Plan");
var H, W;

// LISTE DES VALEURS DES JOUEURS
var listValuePlayer1 = [];
var listValuePlayer2 = [];
var listValuePlayer3 = [];
var listValuePlayer4 = [];

init();
function init() {
	$("#Player1").hide();
	$("#Player2").hide();
	$("#Player3").hide();
	$("#Player4").hide();
	
}

// PERMET DE FIXER LA VALEUR DES CANVAS
setWidthHeight();
function setWidthHeight() {
	  W = $("#graph").width();
	  H = $("#graph").height();
	  
	  grilleElement.width = W;
	  grilleElement.height = H;

	  mouseGrilleElement.width = W;
	  mouseGrilleElement.height = H;
	  
	  texteElement.width = W;
	  texteElement.height = H;
	  
	  planElement.width = W;
	  planElement.height = H;
}

if( joueur == "joueur1") {
	$("#ButtonPlayer1").attr("data-bp","1");
	$("#ButtonPlayer1").css("background","#FF0000");
	$("#ButtonPlayer1").css('border', '3px solid black');
	$("#Player1").show();
}

if( joueur == "joueur2") {
	$("#ButtonPlayer2").attr("data-bp","1");
	$("#ButtonPlayer2").css("background","#FF0000");
	$("#ButtonPlayer2").css('border', '3px solid black');
	$("#Player2").show();
}

if( joueur == "joueur3") {
	$("#ButtonPlayer3").attr("data-bp","1");
	$("#ButtonPlayer3").css("background","#FF0000");
	$("#ButtonPlayer3").css('border', '3px solid black');
	$("#Player3").show();
}

if( joueur == "joueur4") {
	$("#ButtonPlayer4").attr("data-bp","1");
	$("#ButtonPlayer4").css("background","#FF0000");
	$("#ButtonPlayer4").css('border', '3px solid black');
	$("#Player4").show();
}

$(".button-player").click(function() {
	if($(this).attr("data-bp") == "0") {
		$(this).css("background","#FF0000");
		$(this).css('border', '3px solid black');
		$(this).attr("data-bp","1");
	} else {
		$(this).css("background","#FFFFFF");
		$(this).css('border', '3px solid black');
		$(this).attr("data-bp","0");		
	}
	if($("#"+$(this).attr("data-liaison")).is(":visible")) {
		$("#"+$(this).attr("data-liaison")).hide();
	} else {
		$("#"+$(this).attr("data-liaison")).show();
	}
});
$(".button-player").mouseover(function() {
	$(this).css('border', '3px solid black');
});
$(".button-player").mouseout(function() {
	if($(this).attr("data-bp") == "0") {
		$(this).css("background","#FFFFFF");
		$(this).css('border', '1px solid black');
	}
});


/**
 * Permet de fixer les limites sur les ordonnees et les abscisses
 */
function setAxes() {
	// DEFINITION DU MAX SUR LES ABSCISSES
	var maxList = listValuePlayer1;
	if(maxList.length < listValuePlayer2.length) {
		maxList = listValuePlayer2;
	}
	if(maxList.length < listValuePlayer3.length) {
		maxList = listValuePlayer3;
	}
	if(maxList.length < listValuePlayer4.length) {
		maxList = listValuePlayer4;
	}
 	wsc=Math.ceil(Math.ceil((maxList.length + 1))/2)-1;
 	
 	// DEFINITION DU MAX SUR LES ORDONNEES
	var max = 0;
	for(var i = 0; i < maxList.length; i++) {
		if(max<listValuePlayer1[i]) {
			max = listValuePlayer1[i];
		}
		if(max<listValuePlayer2[i]) {
			max = listValuePlayer2[i];
		}
		if(max<listValuePlayer3[i]) {
			max = listValuePlayer3[i];
		}
		if(max<listValuePlayer4[i]) {
			max = listValuePlayer4[i];
		}
	}
	hsc=Math.ceil(max/1000)+1+4;
}

function restatistique() {
	  var ctx = grilleElement.getContext("2d");
	  ctx.clearRect(0, 0, grilleElement.width, grilleElement.height);
	  
	  setAxes();
	  drawGrille();
}

pushValue("Player1",100);
function pushValue(player,value) {
	
}

/**
 * Permet de remplir la liste de valeur
 */
function fillList() {
	listValuePlayer1 = [];
 	$.ajax({
 	 		method: "POST",
 	 		url: "script/getValue.php",
 	 		async: false,
 	 		data: { JOUEUR: "Player1" },
 	 		dataType: "json",
 	 		success: function(data) {
 	 			console.log(data);
 	 			for(var i=0;i<data.length;i++) {
 	 				listValuePlayer1.push(data[i]["Value"]);
 	 			}
 	 		}
 	 	});	
	
	
	listValuePlayer2 = [];
 	$.ajax({
	 		method: "POST",
	 		url: "script/getValue.php",
	 		async: false,
	 	 	data: { JOUEUR: "Player2" },
	 		dataType: "json",
	 		success: function(data) {
	 			for(var i=0;i<data.length;i++) {
	 				listValuePlayer2.push(data[i]["Value"]);
	 			}
	 		}
	 	});	
 	
	
	listValuePlayer3 = [];
 	$.ajax({
	 		method: "POST",
	 		url: "script/getValue.php",
	 		async: false,
	 	 	data: { JOUEUR: "Player3" },
	 		dataType: "json",
	 		success: function(data) {
	 			for(var i=0;i<data.length;i++) {
	 				listValuePlayer3.push(data[i]["Value"]);
	 			}
	 		}
	 	});
 	
	
	listValuePlayer4 = [];
 	$.ajax({
	 		method: "POST",
	 		url: "script/getValue.php",
	 		async: false,
	 	 	data: { JOUEUR: "Player4" },
	 		dataType: "json",
	 		success: function(data) {
	 			for(var i=0;i<data.length;i++) {
	 				listValuePlayer4.push(data[i]["Value"]);
	 			}
	 		}
	 	});
}

//drawMouseGrille();
function drawMouseGrille() {
	  var ctx = mouseGrilleElement.getContext("2d");
	
	  ctx.fillStyle = "#FF0000";
	  ctx.fillRect(0,0,150,75);
}

/**
 * Permet de dessiner les axes et les grilles
 */
function drawGrille() {
	  var ctx = grilleElement.getContext("2d");
	  var division = (W-200)/wsc;

	  // DEFINITION DES AXES
	  ctx.strokeStyle = "#666";
	  ctx.lineWidth=0.5;
	  ctx.font="12px Arial";
	  
	  // AXES HORIZONTAUX CLASSIQUE
	  ctx.beginPath();
	  for(var i=1; i<hsc; i++) 
	  {
		    ctx.moveTo(100, (H/hsc)*i);
		    ctx.lineTo(W-100, (H/hsc)*i);
	  }
	  ctx.stroke();
	  
	  // AXES VERTICAUX CLASSIQUE
	  ctx.beginPath();
	  for(var i=0; i<=wsc; i++) {
		    ctx.moveTo(100+division*i,(H/hsc)*(hsc-1));
		    ctx.lineTo(100+division*i, (H/hsc));
	  }
	  ctx.stroke();

	  // AXES VERTICAUX EN NOIR - CEUX QUI SONT AUX BORDS
	  ctx.beginPath();
	  ctx.strokeStyle = "#000000";
	  ctx.lineWidth=1.5;
	  ctx.moveTo(0, (H/hsc)*1);
	  ctx.lineTo(W, (H/hsc)*1);
	  ctx.moveTo(0, (H/hsc)*(hsc-1));
	  ctx.lineTo(W, (H/hsc)*(hsc-1));
	  ctx.stroke();

	  // AXES HORIZONTAUX EN NOIR - CEUX QUI SONT AUX BORDS
	  ctx.beginPath();
	  ctx.strokeStyle = "#000000";
	  ctx.lineWidth=1.5;
	  ctx.moveTo(100,(H/hsc)*(hsc-1));
	  ctx.lineTo(100, (H/hsc));
	  ctx.moveTo(W-100,(H/hsc)*(hsc-1));
	  ctx.lineTo(W-100, (H/hsc));
	  ctx.stroke();

  
	  // ECRITURE SUR LES AXES - GOLD
	  for(var i=2; i<hsc-1; i++) 
	  {
		  ctx.fillText(hsc-i-1,60,(H/hsc)*i+4.5);
	  }

	  ctx.fillText("Or Gagné (k)",0,(H/hsc)*1-4.5);
	  
	  // ECRITURE SUR LES AXES - TIMER
	  for(var i=0,value = 0; i<=wsc+1; i++) 
	  {
		  if(value<10) {
			  ctx.fillText("0"+value+":00",100+division*(i)-14.5,(H/hsc)*(hsc-1)+16);
		  } else {
			  ctx.fillText(value+":00",100+division*(i)-14.5,(H/hsc)*(hsc-1)+16);
		  }
		  value = value + 2;
	  }
	  ctx.fillText("Temps (minutes)",100+division*(wsc)+3,(H/hsc)*(hsc-1)-3);
	  
	  offsetX = (W/wsc)*1;
	  offsetY = (H/hsc)*(hsc-1);
}

/**
 * Permet de dessiner les graphiques
 */
function drawCircle(color,player) {
	  var circleElement = document.getElementById(player);
	  circleElement.width = W;
	  circleElement.height = H;
	  var ctx = circleElement.getContext("2d");

	  var list;
	  
	  if(player == "Player1") {
		  list = listValuePlayer1;
	  }
	  if(player == "Player2") {
		  list = listValuePlayer2;
	  }
	  if(player == "Player3") {
		  list = listValuePlayer3;
	  }
	  if(player == "Player4") {
		  list = listValuePlayer4;
	  }	  
	  
	  var division = (W-200)/wsc;
	  var lastCalcul,calcul;
  
	  /**
	   * Premiere iteration : Afin que les traits se retrouve sous les cercles.
	   */
	  for(var i = 0; i < list.length; i++) {
		  var mod = list[i] / 1000;
		  lastCalcul = calcul;
		  calcul = (H/hsc)*(hsc-1) - mod*(H/hsc) - (list[i]/1000);
		  
		  if(i!=0) {
			  ctx.beginPath();
			  ctx.moveTo(100+division*i/2,calcul);
			  ctx.lineTo(100+division*(i-1)/2,lastCalcul);
			  ctx.stroke();  
		  }			  
	  }
  
	  /**
	   * Seconde iteraction : Afin de dessiner les cercles sur les traits
	   */
	  for(var i = 0; i < list.length; i++) {
		  var mod = list[i] / 1000;
		  lastCalcul = calcul;
		  calcul = (H/hsc)*(hsc-1) - mod*(H/hsc) - (list[i]/1000);
		  
		  ctx.beginPath();
		  ctx.arc(100+division*i/2,calcul,5,0,2*Math.PI);
	      var circle = {mousePosX:100+division*i/2,mousePosY:calcul,value:list[i]};
	      listCircle.push(circle);
		  ctx.fillStyle=color;
		  ctx.fill();
		  ctx.stroke();
	  }
}

function statistique() {
	  fillList();
	  var ctx = planElement.getContext("2d");
	  
	  setAxes();
	  
	  drawGrille();
	  drawCircle("red","Player1");
	  drawCircle("blue","Player2");
	  drawCircle("yellow","Player3");
	  drawCircle("green","Player4");
  
	  texteElement.addEventListener('mousemove', function(evt) {
	        var mousePos = getMousePos(planElement, evt);
	        var idx;
	    	inside = false;
	        for	(index = 0; index < listCircle.length; index++) {
	        	if(mousePos.x>=listCircle[index].mousePosX-5 && mousePos.x<=listCircle[index].mousePosX+5  && mousePos.y<=listCircle[index].mousePosY+5 && mousePos.y>=listCircle[index].mousePosY-5) {
	        		inside = true;
	        		idx = index;
	        	}
	        }
	        
	        var ctx2 = texteElement.getContext("2d");
	        if(inside) {
	        	insideOne = false;
		        ctx2.clearRect(0, 0, texteElement.width, texteElement.height);
	        	writeTexte(mousePos.x,mousePos.y,listCircle[idx].value);
	        } else {
		        ctx2.clearRect(0, 0, texteElement.width, texteElement.height);
	        	
	        }
	      }, false);
}

/**
 * Permet d'ecrire le texte sur le canvas Texte
 * @param X
 * @param Y
 * @param value
 */
function writeTexte(X,Y,value) {
	var ctx2 = texteElement.getContext("2d");
	ctx2.fillText(value,X-16,Y-10);
}
	
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: (evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width,
      y: (evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height
    };
}