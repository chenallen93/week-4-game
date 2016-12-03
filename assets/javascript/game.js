$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var guess = 0;
	var randomNum;
	var images = ['../week-4-game/assets/images/blue.jpg', 
	'../week-4-game/assets/images/green.jpg', 
	'../week-4-game/assets/images/red.jpg', 
	'../week-4-game/assets/images/yellow.jpg']


	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	randomNum = getRandomInt(1, 100);
	$('#numberyouwant').html(randomNum);
	$('#generatedScore').html('score: ' + 0);


	function getImages() {
		for (var i = 0; i < images.length; i++) {
				var crystalNum = Math.floor(Math.random()*12+1);
    			var imageCrystal = $("<img>");
    			imageCrystal.addClass("crystalImage");
    			imageCrystal.attr("src", images[i]);
    			imageCrystal.attr("data-crystalvalue", crystalNum);
    			$("#crystalImg").append(imageCrystal);
			}
	}

	function resetGame() {
		guess = 0;
		$('#generatedScore').html('score: ' + guess);
		randomNum = getRandomInt(19, 120);
		$('#numberyouwant').html(randomNum);
		$("#crystalImg").empty();
		getImages();

	}

	getImages();


	$(document).on("click", ".crystalImage", function() {
		var crystalvalue = $(this).data("crystalvalue");
		guess += crystalvalue;
		$('#generatedScore').html('score: ' + guess);


		if (guess == randomNum) {
			$('#winloss').html("You won!!");
			wins++;
			$('#wins').html('Wins: ' + wins);
			resetGame();
			
		} else if (guess > randomNum) {
			$('#winloss').html("You lost!!");
			losses++;
			$('#losses').html('Losses: ' + losses);
			resetGame();
		}	
		
	});

});