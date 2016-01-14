<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="js/main.js"></script>
<style>
html,body
{
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/main.css">
<title>Insert title here</title>
</head>
<body>
<div class="full-container" style="background: #FF0000;height: 100%;">
	<div class="row block-top">
		<div class="container">
			<div class="row">
			  <div class="col-md-3 vertical-align font-player" style="height: 50px;border-bottom: 1px solid #f2f2f2;background: #f2f2f2;border-left: 1px solid #bdbdbd;border-right: 1px solid #bdbdbd;">Joueur 1</div>
			  <div class="col-md-3 vertical-align font-player" style="height: 50px;">Joueur 2</div>
			  <div class="col-md-3 vertical-align font-player" style="height: 50px;">Joueur 3</div>
			  <div class="col-md-3 vertical-align font-player" style="height: 50px;">Joueur 4</div>
			</div>
		</div>
	</div>
	<div class="row" style="background: #f2f2f2;height: 200px;">
		<div class="container" style="height: 100%;">
			<div class="row" style="background: #f2f2f2;height: 100%;">
				<div class="col-md-2 vertical-align" style="height: 100%;"><img src="imgs/blue.png" /></div>
			  	<div class="col-md-2 vertical-align font-name" style="height: 100%;">NAME</div>
			</div>
		</div>
	</div>
	<div class="row block-menu">
		<div class="container">
			<div class="row" style="height: 50px;">
			  <div id="resume" class="col-md-1 button-block-3-active button-block-3-border-first">R&#233;sum&#233;</div>
			  <div id="statistique" class="col-md-1 button-block-3 button-block-3-border-added">Statistiques</div>
			  <div id="live" class="col-md-1 button-block-3 button-block-3-border-added">Live</div>
			</div>
		</div>
	</div>
	<div class="row block-bot">
		<div class="container">
			<br /><br />
			<div class="row block-bot-content">
			  <div class="col-md-12 button-block-resume"></div>
			</div>
		</div>
	</div>		
</div>
</body>
</html>