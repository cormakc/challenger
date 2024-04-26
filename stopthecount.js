secs = 0; 
msecs = 0;
update_secs = document.getElementById("secs");
update_msecs = document.getElementById("msecs");
update_timer = null;
game_running = false;
score = 0;
high_score = 0;

window.onload = function() {
	
	document.getElementById('play-again').style.display = "none";
	
}

document.getElementById('start-stop').onclick = function() {
	
	if (!game_running) {
		update_timer = setInterval(start_game, 10);
		game_running = true;
		document.getElementById('start-stop').innerHTML = "Stop";
	} else {
		clearInterval(update_timer);
		document.getElementById('start-stop').style.display = "none";
		document.getElementById('play-again').style.display = "";
		win_message(secs, msecs);
		score = calc_score(secs, msecs);
		document.getElementById("score").innerHTML = "Score: " + score + "%";
		if (score > high_score) {
			high_score = score
			document.getElementById("high-score").innerHTML = "High Score: " + high_score + "%";
		}
	}
	
}

document.getElementById('play-again').onclick = function() {
	
	clearInterval(update_timer);
	secs = "00";
	msecs = "00";
	update_secs.innerHTML = secs;
	update_msecs.innerHTML = msecs;
	game_running = false;
	
	document.getElementById('start-stop').innerHTML = "Start";
	document.getElementById('start-stop').style.display = "";
	document.getElementById('play-again').style.display = "none";
	document.getElementById("result").innerHTML= "";
	document.getElementById("score").innerHTML= "";
	
}
  
function start_game() {
	
	msecs++; 
	
	if(msecs <= 9){
      update_msecs.innerHTML = "0" + msecs;
    }
    if (msecs > 9){
      update_msecs.innerHTML = msecs;
    }
	if (msecs > 99) {
		secs++;
		update_secs.innerHTML = "0" + secs;
		msecs = 0;
		update_msecs.innerHTML = "0" + msecs;
	}
	if (secs > 9){
		update_secs.innerHTML = secs;
	}
	
}

function win_message(seconds, mseconds) {
	
	if (seconds < 2 || seconds > 4) {
		document.getElementById("result").innerHTML = "You suck, dude.";
	} else if ((seconds == 2 && mseconds < 90) || (seconds == 3 && mseconds > 10)) {
		document.getElementById("result").innerHTML = "Not too bad.";
	} else if ((seconds == 2 && mseconds < 95) || (seconds == 3 && mseconds > 5)) {
		document.getElementById("result").innerHTML = "Unlucky, almost there.";
	} else if ((seconds == 2 && mseconds <= 99) || (seconds == 3 && mseconds >= 1)) {
		document.getElementById("result").innerHTML = "So close!";
	} else {
		document.getElementById("result").innerHTML = "OH MY GOD YOU DID IT!";
	}
	
}

function calc_score(seconds, mseconds) {
	
	if (seconds < 2 || seconds > 4) {
		score = 0;
	} else if (seconds == 3) {
		score = 100 - mseconds;
	} else {
		score = mseconds;
	}
	return score;
	
}