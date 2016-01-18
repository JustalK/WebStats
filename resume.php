<br /><br />
<div class="row block-bot-content">
	<div class="col-md-3 button-block-resume vertical-align" style="height: 200px;">
		<canvas id="myChart" width="250px" height="auto">
			
		</canvas>
	</div>
	<div class="col-md-1" style="height: 150px;">
		
	</div>	
	<div class="col-md-8 button-block-resume" style="height: 200px;">
		<br />
		<div class="row vertical-align-only">
	  		<div class="col-md-2 vertical-align">
				<img class="img-responsive" src="imgs/rank1.png" />
			</div>
			<div class="col-md-4 vertical-align-only">
				<table>
					<tr>
						<td>Classement g&#233n&#233ral : 1</td>
					</tr>
					<tr>
						<td class="font-average"><i>Nombre de joueurs : 234</i></td>
					</tr>
				</table>
			</div>
			
			<div class="col-md-2 vertical-align">
				<img class="img-responsive" src="imgs/rank2.png" />
			</div>
			<div class="col-md-4 vertical-align-only">
				<table>
					<tr>
						<td>Classement zombies tu&#233s : 40</td>
					</tr>
					<tr>
						<td class="font-average"><i>Score du meilleur joueur : 234</i></td>
					</tr>
				</table>
			</div>
		</div>
		
		<div class="row vertical-align-only">
	  		<div class="col-md-2 vertical-align">
				<img class="img-responsive" src="imgs/rank3.png" />
			</div>
			<div class="col-md-4 vertical-align-only">
				<table>
					<tr>
						<td>Classement argent gagn&#233 : 302</td>
					</tr>
					<tr>
						<td class="font-average"><i>Score du meilleur joueur : 234000</i></td>
					</tr>
				</table>
			</div>
			
			<div class="col-md-2 vertical-align">
				<img class="img-responsive" src="imgs/rank.png" />
			</div>
			<div class="col-md-4 vertical-align-only">
				<table>
					<tr>
						<td>Classement vagues d&#233truites : 1</td>
					</tr>
					<tr>
						<td class="font-average"><i>Nombre de joueurs : 234</i></td>
					</tr>
				</table>
			</div>
		</div>
		
		<div class="row vertical-align-only">
	  		<div class="col-md-2 vertical-align">
				<img class="img-responsive" src="imgs/rank4.png" />
			</div>
			<div class="col-md-4 vertical-align-only">
				<table>
					<tr>
						<td>Classement tourelles pos&#233es : 120</td>
					</tr>
					<tr>
						<td class="font-average"><i>Score du meilleur joueur : 666</i></td>
					</tr>
				</table>
			</div>
			
			<div class="col-md-2 vertical-align">
				<img class="img-responsive" src="imgs/rank.png" />
			</div>
			<div class="col-md-4 vertical-align-only">
				<table>
					<tr>
						<td>Classement pi&#232ges pos&#233es : 1</td>
					</tr>
					<tr>
						<td class="font-average"><i>Nombre de joueurs : 234</i></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>

<script>
	var ctx = $("#myChart").get(0).getContext("2d");

 	var data = {
 		    labels: ["Argent", "Parties", "Tourelles", "Zombies", "Vagues", "Pieges"],
 		    datasets: [
 		        {
 		            label: "My First dataset",
 		            fillColor: "rgba(220,220,220,0.2)",
 		            strokeColor: "rgba(220,220,220,1)",
 		            pointColor: "rgba(220,220,220,1)",
 		            pointStrokeColor: "#fff",
 		            pointHighlightFill: "#fff",
 		            pointHighlightStroke: "rgba(220,220,220,1)",
 		            data: [65, 59, 90, 81, 56, 55]
 		        },
 		        {
 		            label: "My Second dataset",
 		            fillColor: "rgba(151,187,205,0.2)",
 		            strokeColor: "rgba(151,187,205,1)",
 		            pointColor: "rgba(151,187,205,1)",
 		            pointStrokeColor: "#fff",
 		            pointHighlightFill: "#fff",
 		            pointHighlightStroke: "rgba(151,187,205,1)",
 		            data: [28, 48, 40, 19, 96, 27]
 		        }
 		    ]
 		};



 	var myNewChart = new Chart(ctx).Radar(data);
</script>

<br />
<div class="row block-bot-content">
  <div class="col-md-12 button-block-resume">
  	<div class="container">
  		<br />
  		<div class="row vertical-align-only">
	  		<div class="col-md-1 vertical-align">
				<img src="imgs/gold.png" />
			</div>
			<div class="col-md-3 vertical-align-only">
				<table>
					<tr>
						<td>Argent gagn&#233 : 23456789</td>
					</tr>
					<tr>
						<td class="font-average"><i>Argent gagn&#233 par partie : 234</i></td>
					</tr>
				</table>
			</div>
			
			<div class="col-md-1 vertical-align">
				<img src="imgs/game.png" />
			</div>
			<div class="col-md-3 vertical-align-only">
				<table>
					<tr>
						<td>Parties jou&#233es : 45678</td>
					</tr>
					<tr>
						<td class="font-average"><i>Parties gagn&#233es : 98</i></td>
					</tr>
					<tr>
						<td class="font-average"><i>Joueurs par partie : 2</i></td>
					</tr>
				</table>
			</div>
			
			<div class="col-md-1 vertical-align">
				<img src="imgs/tower.png" />
			</div>
			<div class="col-md-3 vertical-align-only">
				<table>
					<tr>
						<td>Tourelles pos&#233s : 9876</td>
					</tr>
					<tr>
						<td class="font-average"><i>Tourelles pos&#233s par partie : 234</i></td>
					</tr>
				</table>
			</div>
		</div>
		
		<br />
		<div class="row vertical-align-only">
			<div class="col-md-1 vertical-align">
				<img src="imgs/zombie.png" />
			</div>
			<div class="col-md-3 vertical-align-only">
				<table>
					<tr>
						<td>Zombies tu&#233s : 678</td>
					</tr>
					<tr>
						<td class="font-average"><i>Zombies tu&#233s par partie : 76</i></td>
					</tr>
				</table>
			</div>
			
			<div class="col-md-1 vertical-align">
				<img src="imgs/vague.png" />
			</div>
			<div class="col-md-3 vertical-align-only">
				<table>
					<tr>
						<td>Vagues d&#233truites : 5478</td>
					</tr>
					<tr>
						<td class="font-average"><i>Vagues d&#233truites par partie : 26</i></td>
					</tr>
				</table>
			</div>
			
			<div class="col-md-1 vertical-align">
				<img src="imgs/trap.png" />
			</div>
			<div class="col-md-3 vertical-align-only">
				<table>
					<tr>
						<td>Pi&#232ges pos&#233s : 879868</td>
					</tr>
					<tr>
						<td class="font-average"><i>Pi&#232ges pos&#233s par partie : 987</i></td>
					</tr>
				</table>
			</div>
		</div>
		<br />
	</div>
  </div>
</div>