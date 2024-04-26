red = 0;
green = 0;
blue = 0;
score = 0;
high_score = 0;

window.onload = function() {
	
	document.getElementById('submit').style.display = "none";
	document.getElementById('colour-square').style.display = "none";
	document.getElementById('colour-input').style.display = "none";

}

document.getElementById('start-button').onclick = function() {
	
	score = 0;
	red = choose_value();
	green = choose_value();
	blue = choose_value();
	
	document.forms['colour-input']['red'].value = "";
	document.forms['colour-input']['green'].value = "";
	document.forms['colour-input']['blue'].value = "";
	document.getElementById('red-accuracy').innerHTML = "";
	document.getElementById('green-accuracy').innerHTML = "";
	document.getElementById('blue-accuracy').innerHTML = "";
	document.getElementById('score').innerHTML = "";
	document.getElementById('start-button').style.display = "none";
	document.getElementById('result').innerHTML = "";
	document.getElementById('colour-square').style.display = "";
	document.getElementById('colour-input').style.display = "";
	document.getElementById('submit').style.display = "";
	fill_colour_square(red, green, blue);
	
}

document.getElementById('submit').onclick = function() {
	
	if (!check_not_empty('red') || !check_not_empty('green') || !check_not_empty('blue')) {
		alert("Please input a number into every box!");
	} else if (!check_is_num('red') || !check_is_num('green') || !check_is_num('blue')) {
		alert("Please input three positive integers!");
	} else if (!check_range('red') || !check_range('green') || !check_range('blue')) {
		alert("Please input three numbers between 0 and 255!");
	} else {
		score = get_score(red, green, blue);
		document.getElementById('colour-input').style.display = "none";
		document.getElementById('score').innerHTML = "Score: " + score + "%";
		document.getElementById('result').innerHTML = "The RGB value is (" + red + "," + green + "," + blue + ")";
		document.getElementById('submit').style.display = "none";
		document.getElementById('start-button').innerHTML = "Play Again";
		document.getElementById('start-button').style.display = "";
		if (score > high_score) {
			high_score = score;
			document.getElementById("high-score").innerHTML = "High Score: " + high_score + "%";
		}
	}
	
}

function choose_value() {
	
	return (Math.floor(Math.random() * 256));
	
}

function fill_colour_square(r, g, b) {
	
	const square = document.getElementById('colour-square');
	const context = square.getContext('2d');
	context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	context.fillRect(0, 0, 100, 100);
	
}

function check_not_empty(field_name) {
	
	form_value = document.forms['colour-input'][field_name].value;
	
	if (form_value == "") {
		return false;
	} else {
		return true;
	}
	
}

function check_is_num(field_name) {
	
	form_value = document.forms['colour-input'][field_name].value;
    num_regex = /^[0-9]+$/;
	
    if (!form_value.match(num_regex)) {
        return false;
    } else {
		return true;
	}
	
}

function check_range(field_name) {
	
	form_value = document.forms['colour-input'][field_name].value;
	
	if (form_value > 255 || form_value < 0) {
		return false;
	} else {
		return true;
	}
	
}

function get_difference(guess, rgb_value) {
	
	return Math.abs(guess - rgb_value);
	
}

function get_score(r, g, b) {
	
	redguess = document.forms['colour-input']['red'].value;
	greenguess = document.forms['colour-input']['green'].value;
	blueguess = document.forms['colour-input']['blue'].value;
	
	rdecimal = (255 - get_difference(redguess, r)) / 255;
	gdecimal = (255 - get_difference(greenguess, g)) / 255;
	bdecimal = (255 - get_difference(blueguess, b)) / 255;
	
	redpercent = Math.floor(100 * rdecimal);
	document.getElementById('red-accuracy').innerHTML = "The accuracy of your red guess (" + redguess + ") was " + redpercent + "%";
	greenpercent = Math.floor(100 * gdecimal);
	document.getElementById('green-accuracy').innerHTML = "The accuracy of your green guess (" + greenguess + ") was " + greenpercent + "%";
	bluepercent = Math.floor(100 * bdecimal);
	document.getElementById('blue-accuracy').innerHTML = "The accuracy of your blue guess (" + blueguess + ") was " + bluepercent + "%";
	
	score = Math.round((redpercent + greenpercent + bluepercent) / 3);
	return score;
	
}