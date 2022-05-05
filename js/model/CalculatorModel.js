export default class CalculatorModel {
	constructor() {
		//let result = this.initOnModelChange();
		this.id = Math.round(Math.random() * 100000).toString();
		this.bitwidget_values = new Array();
		this.bitwidget_state = false;
		this.calculator_input = document.getElementById("calculator_input");
		this.calculator_input_prev = this.calculator_input.value;
		// return this;
		// console.log("CalculatorModel constructor", this)
	}

	
	setOnChangeCallback(onChangeCallback) {
		this.onChangeCallback = onChangeCallback;
	}

	initOnModelChange() {
		let handler = {
			set: (obj, prop, val) => {
				obj[prop] = val;
				if (this.onChangeCallback) this.onChangeCallback(this);
				return true;
			},
			get(object, property) { 
				if(object.hasOwnProperty(property)){
					for(var prop in object[property]){
						this[prop] = object[property][prop] //set class instance props
					}
				}
				return object[property]; // don't need to return
			}
		}
		return new Proxy(this, handler);
	}

	//create_bit_buttons()
	// console.log(a)
	// var this.bitwidget_values = new Array(arrayLength);

	bitfield_update(selfo, argument) {
		// console.log(argument.textContent)
		//this.bitwidget_values[argument.textContent] ^= 1
		// argument.value ^= 1
		if(argument.value != "0") {
			argument.setAttribute("class", "btn btn-danger calculator-bit border border-dark"); // btn-dark
		} else {
			argument.setAttribute("class", "btn btn-dark calculator-bit border border-dark"); // btn-danger
		}
		// create_bit_buttons()
		//console.log(argument.value, argument.textContent);
	}

	bitfield_inverse(selfo, argument) {

		//console.log("bitfield_inverse", argument.textContent, argument.value, typeof(argument.value));
		//this.bitwidget_values[argument.textContent] ^= 1
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
		//console.log("bitfield_inverse", argument.textContent, argument.value, typeof(argument.value));
		selfo.bitfield_update(selfo, argument);
		//console.log("bitfield_inverse", argument.textContent)
		let value = 0;
		
		// this.items = 7
		//console.log(this.items)

		selfo.bitwidget_values.forEach(function(item, index, array) {
			value += (2 ** index ) * item.value;
		});
		if(value != 0) {
			if(selfo.bitwidget_state) {
				selfo.calculator_input.value = selfo.calculator_input_prev;
			}
			selfo.insert(selfo, value, true);
		} else {
			selfo.calculator_input.value = selfo.calculator_input_prev;
		}

		//console.log(value);
		var tmp = [];
		selfo.bitwidget_values.forEach(function(item, index, array) { tmp.push(item.value);});
		//console.log(tmp);
	}

	bitfieldwidget_clear(selfo) {
		selfo.bitwidget_values.forEach(function(item, index, array) {
			//console.log(item.textContent)
			//item.value = 0;
			selfo.bitwidget_values[index].value = 0;
			selfo.bitfield_update(selfo, item);
		});
	}

	insert(selfo, num, bitwidget_state_l=false) {
		selfo.bitwidget_state = bitwidget_state_l;
		if(selfo.bitwidget_state === false) {
			selfo.bitfieldwidget_clear(selfo);
		}

		selfo.calculator_input_prev = selfo.calculator_input.value;
		selfo.calculator_input.value = selfo.calculator_input.value + num;
	}

	clean(selfo) {
		selfo.bitwidget_state = false;
		selfo.bitfieldwidget_clear(selfo);
		selfo.calculator_input_prev = selfo.calculator_input.value;
		selfo.calculator_input.value = "";
	}

	back(selfo) {
		// console.log("selfo", selfo)
		selfo.bitwidget_state = false;
		selfo.bitfieldwidget_clear(selfo);
		var exp = selfo.calculator_input.value;
		selfo.calculator_input_prev = selfo.calculator_input.value;
		selfo.calculator_input.value = exp.substring(0, exp.length-1);
	}

	equal(selfo) {
		selfo.bitwidget_state = false;
		selfo.bitfieldwidget_clear(selfo);
		var exp = selfo.calculator_input.value;
		selfo.calculator_input_prev = selfo.calculator_input.value;
		if(exp) {
			selfo.calculator_input.value = eval(exp);
		}
	}
}
