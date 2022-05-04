// import UserModel from "../model/UserModel.js";
// import CalculatorModel from "../model/CalculatorModel.js";
// import CalculatorView from './view/CalculatorView.js';

export default class Controller {
	constructor(calculatorModel, calculatorView) {
		this.calculatorModel = calculatorModel;
		this.calculatorView = calculatorView;
		this.calculatorModel.setOnChangeCallback((e) => this.onChangeCallback(e));
		this.calculatorView.InitButtons();
		this.initOnModelChange();
		
		// this.calculatorModel.create_bit_buttons(this.calculatorModel)

		// this.clean = this.calculatorModel.clean;
		// this.back = this.calculatorModel.back;
		// this.insert = this.calculatorModel.insert;
		// this.equal = this.calculatorModel.equal;

		// this.bitfieldwidget_clear = this.calculatorModel.bitfieldwidget_clear;
		// this.bitfield_inverse = this.calculatorModel.bitfield_inverse;
		// this.bitfield_update = this.calculatorModel.bitfield_update;
		// this.bitwidget_values = this.CalculatorModel.bitwidget_values;
	}

	clean() {
		this.calculatorModel.clean(this.calculatorModel)
	}

	back() {
		// console.log("this.calculatorModel", this.calculatorModel)
		this.calculatorModel.back(this.calculatorModel)
	}

	insert(obj) {
		this.calculatorModel.insert(this.calculatorModel, obj)
	}

	equal() {
		this.calculatorModel.equal(this.calculatorModel)
	}

	bitfield_inverse(obj) {
		this.calculatorModel.bitfield_inverse(this.calculatorModel, obj)
	}

	onChangeCallback(obj) {
		/* updates UI when a model has changed (title, done attributes) */

		console.log(obj)
	}


	initOnModelChange() {
		/* updates UI when a model list has changed (adds, deletes items) */
	  
		let handler = {
			set: (obj, prop, val) => {
				obj[prop] = val;
				// console.log(obj, prop, val)
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
		this.calculatorModel = new Proxy(this.calculatorModel, handler);
	}
}
