<?php
	$pseudo = $_POST["JOUEUR"];
	$value = $_POST["VALUE"];
	$mysqli = mysqli_connect("localhost:3306", "root", "", "webstats");
	
	if (!$mysqli) {
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
		echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
		echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
		exit;
	}
	
	//$res = $mysqli->query("SELECT id FROM $pseudo ORDER BY id ASC");
	//$row['id'];
	$mysqli->query("INSERT INTO $pseudo(id) VALUES ($value)");
	
	mysqli_close($mysqli);
?>