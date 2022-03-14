// JavaScript Document
function check_valid_inputs () {
	const form = document.getElementById('form1');
	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	let email = document.getElementById('mail').value;
	let phone = document.getElementById('number').value;
	let numppl = document.getElementById('numppl').value;
	const checkboxarray = [];
	checkboxarray[0] = document.getElementById('gokarting').checked;
	checkboxarray[1] = document.getElementById('batting').checked;
	checkboxarray[2] = document.getElementById('trampoline').checked;
	checkboxarray[3] = document.getElementById('minigolf').checked;
	let value = 0;
	let price = 0;
	for (let i = 0; i < checkboxarray.length; i++ ) {
		if (checkboxarray[i] == true) {
			value = 1;
			if (i == 0) {
				price = price + 20;
			}
			else if (i == 1) {
				price = price + 15;
			}
			else if (i == 2) {
				price = price + 10;
			}
			else if (i == 3) {
				price = price + 25;
			}
		}
	}
	price = price * numppl;
	if (value == 0) {
		let result1 = 'Please, check at least one checkbox!';
		document.getElementById("failure").innerHTML = result1;
	}
	else {
		let result2 = "Dear " + firstname + " " + lastname + ", an email confirmation will be sent to you at " + email + " and you will receive text message updates at " + phone + "." + "<br>" + "Your total is " + price;
		document.getElementById("Confirmation").innerHTML = result2;
	}
	
}

