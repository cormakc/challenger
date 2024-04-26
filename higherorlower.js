current_number = 0;
next_number = 0;
score = 0;
high_score = 0;

window.onload = function() {
	
	document.getElementById('higher-button').style.display = "none";
	document.getElementById('lower-button').style.display = "none";

}

document.getElementById('start-button').onclick = function() {
	
	score = 0;
	current_number = choose_number(current_number);
	
	document.getElementById('start-button').style.display = "none";
	document.getElementById('higher-button').style.display = "";
	document.getElementById('lower-button').style.display = "";
	document.getElementById('score').innerHTML = "Current Streak: " + score;
	document.getElementById("current-num").innerHTML = current_number;
	document.getElementById("result").innerHTML = "";
	
}

document.getElementById('higher-button').onclick = function() {
	
	next_number = choose_number(current_number);
	
	if (next_number > current_number) {
		score++;
		document.getElementById('result').innerHTML = "Correct! (" + next_number + " is higher than " + current_number + ")";
		document.getElementById('score').innerHTML = "Current Streak: " + score;
		current_number = next_number;
		document.getElementById("current-num").innerHTML =  current_number;
	} else {
		document.getElementById('result').innerHTML = "Wrong! (" + next_number + " is lower than " + current_number + ")";
		document.getElementById('score').innerHTML = "Final Score: " + score;
		document.getElementById('higher-button').style.display = "none";
		document.getElementById('lower-button').style.display = "none";
		document.getElementById('start-button').innerHTML = "Play Again";
		document.getElementById('start-button').style.display = "";
		document.getElementById("current-num").innerHTML = next_number;
		if (score > high_score) {
			high_score = score;
			document.getElementById('high-score').innerHTML = "High Score: " + high_score;
		}	
	}
	
}

document.getElementById('lower-button').onclick = function() {
	
	next_number = choose_number(current_number);
	
	if (next_number < current_number) {
		score++;
		document.getElementById('result').innerHTML = "Correct! (" + next_number + " is lower than " + current_number + ")";
		document.getElementById('score').innerHTML = "Current Streak: " + score;
		current_number = next_number;
		document.getElementById("current-num").innerHTML = current_number;
	} else {
		document.getElementById('result').innerHTML = "Wrong! (" + next_number + " is higher than " + current_number + ")";
		document.getElementById('score').innerHTML = "Final Score: " + score;
		document.getElementById('higher-button').style.display = "none";
		document.getElementById('lower-button').style.display = "none";
		document.getElementById('start-button').innerHTML = "Play Again";
		document.getElementById('start-button').style.display = "";
		document.getElementById("current-num").innerHTML = next_number;
		if (score > high_score) {
			high_score = score;
			document.getElementById('high-score').innerHTML = "High Score: " + high_score;
		}		
	}
	
}

function choose_number(current_num) {
	
	random_num = Math.floor((Math.random() * 13) + 1);
	return (random_num === current_num) ? choose_number(current_num) : random_num;
	
}
