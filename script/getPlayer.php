<?php
	$pseudo = $_POST["JOUEUR"];

	$mysqli = mysqli_connect("localhost:3306", "root", "", "webstats");
	
	if (!$mysqli) {
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
		echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
		echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
		exit;
	}
	
	
	$rsl = $mysqli->query("SELECT * FROM $pseudo");
	if(mysqli_num_rows($rsl) > 0) {
		$res = $mysqli->query("SELECT * FROM $pseudo");
	} else {
		$mysqli->query("CREATE TABLE $pseudo(gold INT,party INT,tower INT,zombi INT,wave INT,trap INT)");
	 	$mysqli->query("INSERT INTO $pseudo(gold,party,tower,zombi,wave,trap) VALUES (10,200,3000,40,50,60)");
	}
	
	$array = [];
	while ($row = $res->fetch_assoc()) {
		$array[] = array('Gold' => $row['gold'],'Party' => $row['party'],'Tower' => $row['tower'],'Zombi' => $row['zombi'],'Wave' => $row['wave'],'Trap' => $row['trap']);
	}
	
	echo json_encode($array);
	mysqli_close($mysqli);
?>