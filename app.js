const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');



function celToFar() {

	// celsius to fahrenheit
	let output = ( parseFloat(celsius.value) * 9/5) + 32;
	fahrenheit.value = parseFloat(output.toFixed(2));

	// celsius to kelvin
	let output2 = ( parseFloat(celsius.value) + 273.15);
	kelvin.value = parseFloat(output2.toFixed(2));

}

function farToCel() {

	// fahrenheit to celsius
	let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
	celsius.value = parseFloat(output.toFixed(2));

	// fahrenheit to kelvin
	let output2 = ( parseFloat(fahrenheit.value) - 32) * 5/9 + 273.15;
	kelvin.value = parseFloat(output2.toFixed(2));
	
}


// New vals

function KelToCel() {

	// kelvin to celsius
	let output = ( parseFloat(kelvin.value) - 273.15);
	celsius.value = parseFloat(output.toFixed(2));

	// kelvin to fahrenheit
	let output2 = ( parseFloat(kelvin.value) - 273.15) * 9/5 + 32;
	fahrenheit.value = parseFloat(output2.toFixed(2));


}

