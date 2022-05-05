import UserAboutModel from './../model/UserAboutModel.js';

export default class UserAboutListController {
	constructor(aboutmeModel, aboutmeView) {
		this.aboutmeModel = aboutmeModel;
		this.aboutmeView = aboutmeView;
		this.aboutmeModel.setOnChangeCallback((e) => this.onChangeCallback(e));
		
		this.initOnModelChange();
		
		// this.aboutmeModel.create_bit_buttons(this.aboutmeModel)

		// this.clean = this.aboutmeModel.clean;
		// this.back = this.aboutmeModel.back;
		// this.insert = this.aboutmeModel.insert;
		// this.equal = this.aboutmeModel.equal;

		// this.bitfieldwidget_clear = this.aboutmeModel.bitfieldwidget_clear;
		// this.bitfield_inverse = this.aboutmeModel.bitfield_inverse;
		// this.bitfield_update = this.aboutmeModel.bitfield_update;
		// this.bitwidget_values = this.CalculatorModel.bitwidget_values;
	}

	onChangeCallback() {
		/* updates UI when a model has changed (title, done attributes) */
		document.getElementById("aboutmeTable").innerHTML = this.aboutmeView.toHtml()
	}

	addRow(key, value) {
		// const UserAboutModel = new UserAboutModel(title);
        // this.itemListModel.add(item);
        this.aboutmeModel.add(key, value)
	}

	initOnModelChange() {
		/* updates UI when a model list has changed (adds, deletes items) */
	  
		let handler = {
			set: (obj, prop, val) => {
				obj[prop] = val;
				// console.log(obj, prop, val)
				//document.querySelector('#to-do').innerHTML = this.itemListView.toHtml();
				
				this.onChangeCallback()
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
		this.aboutmeModel.items = new Proxy(this.aboutmeModel.items, handler);
	}
}
