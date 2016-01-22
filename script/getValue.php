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
	 **/
	
	$res = $mysqli->query("SELECT id FROM ".$_POST["JOUEUR"]." ORDER BY id ASC");
	
	$array = [];
	while ($row = $res->fetch_assoc()) {
		$array[] = array('Value' => $row['id']);
	}
	
	echo json_encode($array);
	mysqli_close($mysqli);
?>