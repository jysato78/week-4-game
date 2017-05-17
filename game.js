
// JavaScript function that wraps everything
$(document).ready(function() {

		var userScore = 0;
			$("#yourScore").text(userScore);
		var newScore = 0;
		var wins = 0;
			$("#wins").text(wins);
		var losses = 0;
			$("#losses").text(losses);
		var randomNumber = Math.ceil(Math.random() *120);
			$("#match").text(randomNumber);
			

		var redCrystalNumber = Math.floor(Math.random() *12) + 1;
		console.log("red is:",redCrystalNumber);

		var blueCrystalNumber = Math.floor(Math.random() *12) + 1;
		console.log("blue is:",blueCrystalNumber);

		var yellowCrystalNumber = Math.floor(Math.random() *12) + 1;
		console.log("yellow is:",yellowCrystalNumber);

		var greenCrystalNumber = Math.floor(Math.random() *12) + 1;
		console.log("green",greenCrystalNumber);
		
	// Crystals
	
	   $(".red-crystal").on("click", function() {
        	newScore += redCrystalNumber;
        	$("#yourScore").text(newScore);
        	if(randomNumber < newScore) {
      			losses++;
      			$("#losses").text(losses);
      			$("#wins").text(wins);
      			console.log("losses: ",losses);
      			alert("Game Over!");
      			
      			userScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);
      		}
      		else if(randomNumber === newScore) {
      			alert("You Win!");
      			wins++;
      			$("#wins").text(wins);
      			//console.log("losses: ",losses);
      			userScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);
      		}
        	console.log("yourScore w/ Red: ",newScore);
      });

      $(".blue-crystal").on("click", function() {
        	newScore += blueCrystalNumber;
        	$("#yourScore").text(newScore);
        	if(randomNumber < newScore) {
      			
      			losses++;
      			$("#losses").text(losses);
      			$("#wins").text(wins);
      			console.log("losses: ",losses);
      			alert("Game Over!");
      			serScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);
				
      		}
      		else if(randomNumber === newScore) {
      			alert("You Win!");
      			wins++;
      			$("#wins").text(wins);
      			//console.log("losses: ",losses);
      			userScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);
				
      		}
        	console.log("yourScore w/ Blue",newScore);
      });

      $(".yellow-crystal").on("click", function() {
	        newScore += yellowCrystalNumber;
	        $("#yourScore").text(newScore);
	        if(randomNumber < newScore) {
      			
      			losses++;
      			$("#losses").text(losses);
      			console.log("losses: ",losses);
      			$("#wins").text(wins);
      			alert("Game Over!");
      			userScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);
				
      		}
      		else if(randomNumber === newScore) {
      			alert("You Win!");
      			wins++;
      			$("#wins").text(wins);
      			//console.log("losses: ",losses);
      			userScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);
				
      		}
       		console.log("yourScore w/ Yellow: ",newScore);
      });

      $(".green-crystal").on("click", function() {
	        newScore += greenCrystalNumber;
	        $("#yourScore").text(newScore);
	       	if(randomNumber < newScore) {
      			
      			losses++;
      			$("#losses").text(losses);
      			console.log("losses: ",losses);
      			$("#wins").text(wins);
      			alert("Game Over!");
      			uerScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);
				
      		} 
	        else if(randomNumber === newScore) {
      			alert("You Win!");
      			wins++;
      			$("#wins").text(wins);
      			//console.log("losses: ",losses);
      			userScore = 0;
				    newScore = 0;
				    randomNumber = Math.ceil(Math.random() *120);
				    $("#match").text(randomNumber);

      		}
	        console.log("yourScore w/ Green: ",newScore);
      });
	});
