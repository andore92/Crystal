
	$(document).ready(function() { 
		$(".crystal").mouseover(function() {
			(this).fadeTo('fast', 0.25);
		});
	});

	// random number generator
	var number = Math.floor((Math.random() * 102) + 19);
		console.log("Number to get: " + number)
	
	// crystal value generator 
	
	var blue = Math.floor((Math.random() * 12) + 1);
		console.log("Blue value: " + blue)
	var red = Math.floor((Math.random() * 12) + 1);
		console.log("Red value: " + red)
	var yellow = Math.floor((Math.random() * 12) + 1);
		console.log("Yellow value: " + yellow)
	var green = Math.floor((Math.random() * 12) + 1);
		console.log("Green value: " + green)
	
	// Setting starting values to 0 using global vars
	
	var guessTotal = 0;
	var wins = 0;
	var losses = 0;
	
	// Displays the number you need to guess on the page.
	

	$("#numberGuess").text(number);
		
	

	// On click events for each crystal.
	$(".bluecrystal").click(function() {
		update(blue);
	});
	$(".redcrystal").click(function() {
		update(red);
	});
	$(".yellowcrystal").click(function() {
		update(yellow);
	});
	$(".greencrystal").click(function() {
		update(green);
	});
	$(".dropdown").click(function() {
		$(".instructions").toggle("slow");
	})
	

	// Game resets when a win or loss happens 
	function reset() {
		// Generates a new number to guess.
		number = Math.floor((Math.random() * 102) + 19);
		// Displays that number on the page.
		$("#numberGuess").text(number);
		// Generates new values for the crystals.
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		// Resets the total guess to 0.
		guessTotal = 0;
		// Displays the guess total.
		$(".guessdisplay").html(guessTotal);
	};
	// This function updates the user's total guess. 
	function update(color) {
		// Increases the total guess by the value of the chosen crystal.
		guessTotal += color;
		// Removes the old total and replaces it with the new total. 
		$(".guessdisplay").empty();
		$(".guessdisplay").append(guessTotal);
		// Checks to see if you win or lose.
		if (guessTotal > number) {
			// Adds a loss.
			losses++;
			// Displays updated losses.
			$("#lossesdisplay").html(losses);
			// Calls the reset function to reset the game.
			reset();
			
		} else if (guessTotal == number) {
			// Adds a win.
			wins++;
			// Displays the updated wins.
			$("#winsdisplay").html(wins);
			// Calls the reset function to reset the game.
			reset();
			
		};
	};
