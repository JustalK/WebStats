
var listPlayerGold = 0;
var listPlayerGame = 0;
var listPlayerTower = 0;
var listPlayerZombi = 0;
var listPlayerWave = 0;
var listPlayerTrap = 0;

var listPlayerGoldAverage = 0;
var listPlayerTowerAverage = 0;
var listPlayerZombiAverage = 0;
var listPlayerWaveAverage = 0;
var listPlayerTrapAverage = 0;

searchInfoSQL($("#joueur1").html());
function searchInfoSQL(pseudo) {
 	$.ajax({
 		method: "POST",
 		url: "script/getPlayer.php",
 		async: false,
 		data: { JOUEUR: pseudo },
 		dataType: "json",
 		success: function(data) {
	 			for(var i=0;i<data.length;i++) {
	 	 			listPlayerGold += parseInt(data[i]['Gold']);
	 	 			listPlayerGame += parseInt(data[i]['Party']);
	 	 			listPlayerTower += parseInt(data[i]['Tower']);
	 	 			listPlayerZombi += parseInt(data[i]['Zombi']);
	 	 			listPlayerWave += parseInt(data[i]['Wave']);
	 	 			listPlayerTrap += parseInt(data[i]['Trap']);
	 			}
	 			listPlayerGoldAverage = listPlayerGold/data.length;
	 			listPlayerTowerAverage = listPlayerTower/data.length;
	 			listPlayerZombiAverage = listPlayerZombi/data.length;
	 			listPlayerWaveAverage = listPlayerWave/data.length;
	 			listPlayerTrapAverage = listPlayerTrap/data.length;
 			update();
 		}
 	});	
}

function update() {
	$("#gold").html(listPlayerGold);
	$("#party").html(listPlayerGame);
	$("#tower").html(listPlayerTower);
	$("#zombi").html(listPlayerZombi);
	$("#wave").html(listPlayerWave);
	$("#trap").html(listPlayerTrap);
	
	$("#goldAverage").html(listPlayerGoldAverage);
	$("#towerAverage").html(listPlayerTowerAverage);
	$("#zombiAverage").html(listPlayerZombiAverage);
	$("#waveAverage").html(listPlayerWaveAverage);
	$("#trapAverage").html(listPlayerTrapAverage);
}

