<div id="joueur" style="display: none;"><?php echo $_POST["JOUEUR"];?></div>
<div class="row block-bot-content">
	<div id="graph" class="col-md-12" style="position: relative;height:500px;z-index: 2">
			<div id="ButtonPlayer1" class="vertical-align button-player" data-bp="0" data-liaison="Player1" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;position:absolute;right: 0;top: 50px;z-index:1000;">
				J1
			</div>
			
			<div id="ButtonPlayer2" class="vertical-align button-player" data-bp="0" data-liaison="Player2" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;position:absolute;right: 0;top: 150px;z-index:1000;">
				J2
			</div>
			<div id="ButtonPlayer3" class="vertical-align button-player" data-bp="0" data-liaison="Player3" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;position:absolute;right: 0;top: 250px;z-index:1000;">
				J3
			</div>
			<div id="ButtonPlayer4" class="vertical-align button-player" data-bp="0" data-liaison="Player4" style="background: #FFFFFF;width:60px;height: 60px;border: 1px solid black;position:absolute;right: 0;top: 350px;z-index:1000;">
				J4
			</div>		
		
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

<script src="js/statistique.js"></script>



















