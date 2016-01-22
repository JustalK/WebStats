<?php 

	$mysqli = mysqli_connect("localhost:3306", "root", "", "webstats");
	
	if (!$mysqli) {
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
		echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
		echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
		exit;
	}
	/**
	$mysqli->query("CREATE TABLE Player1(id INT)");
	$mysqli->query("CREATE TABLE Player2(id INT)");
	$mysqli->query("CREATE TABLE Player3(id INT)");
	$mysqli->query("CREATE TABLE Player4(id INT)");
	
	$mysqli->query("INSERT INTO Player1(id) VALUES (0), (1000), (3000)");
	$mysqli->query("INSERT INTO Player2(id) VALUES (0), (2000), (6000)");
	$mysqli->query("INSERT INTO Player3(id) VALUES (0), (3000), (8000)");
	$mysqli->query("INSERT INTO Player4(id) VALUES (0), (4000), (10000)");
	
	$res = $mysqli->query("SELECT id FROM Player1 ORDER BY id ASC");
	**/
	mysqli_close($mysqli);
?>

<br /><br />
<div class="row">
	<div class="col-md-3 vertical-align">
		<div id="ButtonPlayer1" class="vertical-align button-player" data-bp="0" data-liaison="Player1" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;">
			J1
		</div>
	</div>
	<div class="col-md-3 vertical-align">
		<div id="ButtonPlayer2" class="vertical-align button-player" data-bp="0" data-liaison="Player2" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;">
			J2
		</div>
	</div>
	<div class="col-md-3 vertical-align">
		<div id="ButtonPlayer3" class="vertical-align button-player" data-bp="0" data-liaison="Player3" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;">
			J3
		</div>
	</div>
	<div class="col-md-3 vertical-align">
		<div id="ButtonPlayer4" class="vertical-align button-player" data-bp="0" data-liaison="Player4" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;">
			J4
		</div>
	</div>
</div>
<div class="row block-bot-content">
	<div id="graph" class="col-md-12" style="position: relative;height:500px;z-index: 2">
			<canvas id="Grille" style="position: absolute;z-index: 1;">
			</canvas>

			<canvas id="MouseGrille" style="position: absolute;z-index: 2;">
			</canvas>
			
			<canvas id="Player1" style="position: absolute;z-index: 3;">
			</canvas>
			
			<canvas id="Player2" style="position: absolute;z-index: 4;">
			</canvas>
			
			<canvas id="Player3" style="position: absolute;z-index: 5;">
			</canvas>
			
			<canvas id="Player4" style="position: absolute;z-index: 6;">
			</canvas>
			
			<canvas id="Plan" style="position: absolute;z-index: 7;">
			</canvas>
			
			<canvas id="Texte" style="position: absolute;z-index: 8;">
				Your browser does not support the HTML5 canvas tag.
			</canvas>
	</div>

</div>
  	
C'est <?php echo $_POST["JOUEUR"]; ?> !

<script src="js/statistique.js"></script>



















