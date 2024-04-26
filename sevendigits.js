given_number = 0;
player_number = 0;
given_array = 0;
player_array = 0;
correct_answer = 0;
score = 0;

window.onload = function() {
	
	document.getElementById('submit').style.display = "none";
	document.getElementById('number-input').style.display = "none";
	document.getElementById('begin').style.display = "none";
	document.getElementById('question1').style.display = "none";
	document.getElementById('question2').style.display = "none";
	document.getElementById('question3').style.display = "none";
	document.getElementById('question4').style.display = "none";
	document.getElementById('question5').style.display = "none";

}

document.getElementById('start-button').onclick = function() {
	
	score = 0;
	player_number = 0;
	player_array = 0;
	given_array = 0;
	correct_answer = 0;
	given_number = choose_number();
	
	document.getElementById('start-button').style.display = "none";
	document.getElementById('form-label').innerHTML = "Please enter a seven digit number:";
	document.getElementById('number-input').style.display = "";
	document.getElementById('submit').style.display = "";
	document.getElementById('score').innerHTML = "";
	document.getElementById('result').innerHTML = "";
	document.forms['number-input']['player-input'].value = "";
	
	
}

document.getElementById('submit').onclick = function() {
	
	if (!check_not_empty() || !check_is_num() || !check_length()) {
		alert("Please input a positive seven digit number!");
	} else if (!check_not_same(given_number)) {
		alert("Remarkably you have chosen the same number the computer has generated. Please choose a different number.")
	} else {
		player_number = document.forms['number-input']['player-input'].value;
		p_temp = player_number.toString().split('');
		player_array = p_temp.map(Number);
		g_temp = given_number.toString().split('');
		given_array = g_temp.map(Number);
		document.getElementById('submit').style.display = "none";
		document.getElementById('number-input').style.display = "none";
		document.getElementById('player-number').innerHTML = "The number you have given is: " + player_number;
		document.getElementById('given-number').innerHTML = "The number the computer has generated is: " + given_number;
		document.getElementById('instructions').innerHTML = "Please memorize these two numbers, then click below to begin the challenge.";
		document.getElementById('begin').style.display = "";
	}
	
}

document.getElementById('begin').onclick = function() {
	
	document.getElementById('begin').style.display = "none";
	document.getElementById('question1').style.display = "";
	document.forms['number-input']['player-input'].value = "";
	document.getElementById('number-input').style.display = "";
	document.getElementById('player-number').innerHTML = "";
	document.getElementById('given-number').innerHTML = "";
	document.getElementById('form-label').innerHTML = "Answer:";
	document.getElementById('instructions').innerHTML = "Question 1: What is the final digit of the larger of the two numbers?";
	
	if (player_num_larger(player_number, given_number)) {
		correct_answer = player_array[6];
	} else {
		correct_answer = given_array[6];
	}
	
}

document.getElementById('question1').onclick = function() {
	
	if (document.forms['number-input']['player-input'].value == correct_answer) {
		score++;
		document.getElementById('result').innerHTML = "Correct!";
	} else {
		document.getElementById('result').innerHTML = "Incorrect! The correct answer was " + correct_answer + ".";
	}
	
	document.getElementById('question1').style.display = "none";
	document.getElementById('question2').style.display = "";
	document.forms['number-input']['player-input'].value = "";
	document.getElementById('instructions').innerHTML = "Question 2: What is the value of the fourth digits of each number added together?";
	
	correct_answer = player_array[3] + given_array[3];
	
}

document.getElementById('question2').onclick = function() {
	
	if (document.forms['number-input']['player-input'].value == correct_answer) {
		score++;
		document.getElementById('result').innerHTML = "Correct!";
	} else {
		document.getElementById('result').innerHTML = "Incorrect! The correct answer was " + correct_answer + ".";
	}
	
	document.getElementById('question2').style.display = "none";
	document.getElementById('question3').style.display = "";
	document.forms['number-input']['player-input'].value = "";
	document.getElementById('instructions').innerHTML = "Question 3: What is the value of all seven digits of the computer generated number added together?";
	
	correct_answer = given_array[0] + given_array[1] + given_array[2] + given_array[3] + given_array[4] + given_array[5] + given_array[6];
	
}

document.getElementById('question3').onclick = function() {
	
	if (document.forms['number-input']['player-input'].value == correct_answer) {
		score++;
		document.getElementById('result').innerHTML = "Correct!";
	} else {
		document.getElementById('result').innerHTML = "Incorrect! The correct answer was " + correct_answer + ".";
	}
	
	document.getElementById('question3').style.display = "none";
	document.getElementById('question4').style.display = "";
	document.forms['number-input']['player-input'].value = "";
	document.getElementById('instructions').innerHTML = "Question 4: What is the value of all seven digits of your number multiplied together?";
	
	correct_answer = player_array[0] * player_array[1] * player_array[2] * player_array[3] * player_array[4] * player_array[5] * player_array[6];
	
}

document.getElementById('question4').onclick = function() {
	
	if (document.forms['number-input']['player-input'].value == correct_answer) {
		score++;
		document.getElementById('result').innerHTML = "Correct!";
	} else {
		document.getElementById('result').innerHTML = "Incorrect! The correct answer was " + correct_answer + ".";
	}
	
	document.getElementById('question4').style.display = "none";
	document.getElementById('question5').style.display = "";
	document.forms['number-input']['player-input'].value = "";
	document.getElementById('instructions').innerHTML = "Question 5: What is the value of both seven digit numbers added together?";
	
	correct_answer = parseInt(player_number) + parseInt(given_number);
	
}

document.getElementById('question5').onclick = function() {
	
	if (document.forms['number-input']['player-input'].value == correct_answer) {
		score++;
		document.getElementById('result').innerHTML = "Correct!";
	} else {
		document.getElementById('result').innerHTML = "Incorrect! The correct answer was " + correct_answer + ".";
	}
	
	if (score < 3) {
		document.getElementById('score').innerHTML = "You only scored " + score + " out of 5. Shambles.";
	} else {
		document.getElementById('score').innerHTML = "Congratulations! You scored " + score + " out of 5!";
	}
	
	document.getElementById('question5').style.display = "none";
	document.getElementById('instructions').innerHTML = "";
	document.getElementById('number-input').style.display = "none";
	document.getElementById('start-button').innerHTML = "Play Again";
	document.getElementById('start-button').style.display = "";
	
}

function choose_number() {
	
	return (Math.floor((Math.random() * 9000000) + 1000000));
	
}

function check_not_empty() {
	
	form_value = document.forms['number-input']['player-input'].value;
	
	if (form_value == "") {
		return false;
	} else {
		return true;
	}
	
}

function check_is_num() {
	
	form_value = document.forms['number-input']['player-input'].value;
    num_regex = /^[0-9]+$/;
	
    if (!form_value.match(num_regex)) {
        return false;
    } else {
		return true;
	}
	
}

function check_length() {
	
	form_value = document.forms['number-input']['player-input'].value;
	
	if (form_value < 1000000 || form_value > 9999999) {
		return false;
	} else {
		return true;
	}
	
}

function check_not_same(given_num) {
	
	form_value = document.forms['number-input']['player-input'].value;
	
	if (form_value == given_num) {
		return false;
	} else {
		return true;
	}
	
}

function player_num_larger(player_num, given_num) {
	
	if (player_num > given_num) {
		return true;
	} else {
		return false;
	}
	
}