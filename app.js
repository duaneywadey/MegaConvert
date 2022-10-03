// Temperature
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

// Length
const centimeters = document.getElementById('centimeters');
const inches = document.getElementById('inches');
const meters = document.getElementById('meters');
const feet = document.getElementById('feet');
const yards = document.getElementById('yards');
const miles = document.getElementById('miles');
const kilometers = document.getElementById('kilometers');





function celToFar() {

	// celsius to fahrenheit
	let output = ( parseFloat(celsius.value) * 9/5) + 32 || 0;
	fahrenheit.value = parseFloat(output.toFixed(2));

	// celsius to kelvin
	let output2 = ( parseFloat(celsius.value) + 273.15) || 0;
	kelvin.value = parseFloat(output2.toFixed(2));

}

function farToCel() {

	// fahrenheit to celsius
	let output = ( parseFloat(fahrenheit.value) - 32) * 5/9 || 0;
	celsius.value = parseFloat(output.toFixed(2));

	// fahrenheit to kelvin
	let output2 = ( parseFloat(fahrenheit.value) - 32) * 5/9 + 273.15 || 0;
	kelvin.value = parseFloat(output2.toFixed(2));
	
}


// New vals

function KelToCel() {

	// kelvin to celsius
	let output = ( parseFloat(kelvin.value) - 273.15) || 0;
	celsius.value = parseFloat(output.toFixed(2));

	// kelvin to fahrenheit
	let output2 = ( parseFloat(kelvin.value) - 273.15) * 9/5 + 32 || 0;
	fahrenheit.value = parseFloat(output2.toFixed(2));


}

function centiToAll() {

	// centi to inches 
	let output = ( parseFloat(centimeters.value) / 2.54) || 0;
	inches.value = parseFloat(output.toFixed(2));

	// centi to meters 
	let output2 = ( parseFloat(centimeters.value) / 100) || 0;
	meters.value = parseFloat(output2.toFixed(2));

	// centi to feet 
	let output3 = ( parseFloat(centimeters.value) / 30.48) || 0;
	feet.value = parseFloat(output3.toFixed(2));

	// centi to yards 
	let output4 = ( parseFloat(centimeters.value) / 91.44) || 0;
	yards.value = parseFloat(output4.toFixed(2));

	// centi to miles 
	let output5 = ( parseFloat(centimeters.value) / 160900) || 0;
	miles.value = parseFloat(output5.toFixed(2));

	// centi to km 
	let output6 = ( parseFloat(centimeters.value) / 100000) || 0;
	kilometers.value = parseFloat(output6.toFixed(2));
}

function inchToAll() {

	// inches to cm 
	let output = ( parseFloat(inches.value) * 2.54) || 0;
	centimeters.value = parseFloat(output.toFixed(2));

	// inches to meters 
	let output2 = ( parseFloat(inches.value) / 39.37) || 0;
	meters.value = parseFloat(output2.toFixed(2));

	// inches to feet 
	let output3 = ( parseFloat(inches.value) / 12) || 0;
	feet.value = parseFloat(output3.toFixed(2));

	// inches to yards 
	let output4 = ( parseFloat(inches.value) / 36) || 0;
	yards.value = parseFloat(output4.toFixed(2));

	// inches to miles 
	let output5 = ( parseFloat(inches.value) / 63360) || 0;
	miles.value = parseFloat(output5.toFixed(2));

	// inches to km 
	let output6 = ( parseFloat(inches.value) / 39370) || 0;
	kilometers.value = parseFloat(output6.toFixed(2));

}

function meterToAll() {

}

function feetToAll() {

}

function yardToAll() {

}

function mileToAll() {

}

function kiloMToAll() {

}

