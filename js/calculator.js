//
var bitwidget_values = [];
var bitwidget_state = false;
var calculator_input_prev = document.getElementById("calculator_input").value;

//
var calculator_bits = document.getElementById("calculator-bits");

for(var a = 0; a < 8; a++) { /* 32 bits, 64bit integers is not representable in js*/
	var bit_decorator_block = document.createElement("div");
	calculator_bits.appendChild(bit_decorator_block)
	bit_decorator_block.setAttribute("class", "w-50 align-items-center m-0 p-0")

	var bit_block = document.createElement("div");
	bit_block.setAttribute("class", "w-100 btn-group center-block")

	for(var b = 0; b < 4; b++) {
		var new_bit = document.createElement("button");
		var button_value = 31 - (a*4 + b);
		new_bit.textContent = button_value;
		// new_bit.setAttribute("onclick", "insert('" + button_value + "')"); // btn-danger
		new_bit.setAttribute("onclick", "bitfield_inverse(this)");
		new_bit.setAttribute("class", "btn btn-dark calculator-bit border border-dark"); // btn-danger
		new_bit.setAttribute("id", "calculator-bit" + new_bit.textContent);
		new_bit.value = 0;
		bit_block.appendChild(new_bit);
		bitwidget_values.unshift(new_bit)
	}
	bit_decorator_block.appendChild(bit_block)
}
// console.log(a)
// var bitwidget_values = new Array(arrayLength);
function bitfield_update(argument) {
	// console.log(argument.textContent)
	//bitwidget_values[argument.textContent] ^= 1
	// argument.value ^= 1
	if(argument.value != "0") {
		argument.setAttribute("class", "btn btn-danger calculator-bit border border-dark"); // btn-dark
	} else {
		argument.setAttribute("class", "btn btn-dark calculator-bit border border-dark"); // btn-danger
	}
	//console.log(argument.value, argument.textContent);
}
function bitfield_inverse(argument) {

	console.log("bitfield_inverse", argument.textContent, argument.value, typeof(argument.value));
	//bitwidget_values[argument.textContent] ^= 1
	// argument.value ^= 1

	//argument.value = !argument.value;
	if(argument.value 	!= "0") {
		//argument.value = false;
		//console.log("argument.value = false;");
		argument.value = 0;
	} else {
		//argument.value = true;
		//console.log("argument.value = true;");
		argument.value = 1;
	}
	console.log("bitfield_inverse", argument.textContent, argument.value, typeof(argument.value));
	bitfield_update(argument);
	//console.log("bitfield_inverse", argument.textContent)
	value = 0;
	bitwidget_values.forEach(function(item, index, array) {
		value += (2 ** index ) * item.value;
	});
	if(value != 0) {
		if(bitwidget_state) {
			document.getElementById("calculator_input").value = calculator_input_prev;
		}
		insert(value, true);
	} else {
		document.getElementById("calculator_input").value = calculator_input_prev;
	}

	console.log(value);
	var tmp = [];
	bitwidget_values.forEach(function(item, index, array) { tmp.push(item.value);});
	console.log(tmp);
}
function bitfieldwidget_clear() {
	bitwidget_values.forEach(function(item, index, array) {
		//console.log(item.textContent)
		//item.value = 0;
		bitwidget_values[index].value = 0;
		bitfield_update(item);
	});
}
function insert(num, bitwidget_state_l=false) {
	bitwidget_state = bitwidget_state_l;
	if(bitwidget_state === false) {
		bitfieldwidget_clear();
	}

	calculator_input_prev = document.getElementById("calculator_input").value;
	document.getElementById("calculator_input").value = document.getElementById("calculator_input").value + num;
}
function clean() {
	bitwidget_state = false;
	bitfieldwidget_clear();
	calculator_input_prev = document.getElementById("calculator_input").value;
	document.getElementById("calculator_input").value = "";
}
function back() {
	bitwidget_state = false;
	bitfieldwidget_clear();
	var exp = document.getElementById("calculator_input").value;
	calculator_input_prev = document.getElementById("calculator_input").value;
	document.getElementById("calculator_input").value = exp.substring(0, exp.length-1);
}
function equal() {
	bitwidget_state = false;
	bitfieldwidget_clear();
	var exp = document.getElementById("calculator_input").value;
	calculator_input_prev = document.getElementById("calculator_input").value;
	if(exp) {
		document.getElementById("calculator_input").value = eval(exp);
	}
}
