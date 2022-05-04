export default class CalculatorView {
	constructor(itemModel) {
		this.itemModel = itemModel;
	}

	InitButtons() {
		//this.itemModel.create_bit_buttons(this.itemModel)
		var calculator_bits = document.getElementById("calculator-bits");
		calculator_bits.innerHTML = "";

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
				new_bit.setAttribute("onclick", "window.controller.bitfield_inverse(this)");
				new_bit.setAttribute("class", "btn btn-dark calculator-bit border border-dark"); // btn-danger
				new_bit.setAttribute("id", "calculator-bit" + new_bit.textContent);
				new_bit.value = 0;
				bit_block.appendChild(new_bit);
				
				this.itemModel.bitwidget_values.unshift(new_bit)
			}
			bit_decorator_block.appendChild(bit_block)
		}
		// console.log(this.bitwidget_values)
	}
}
