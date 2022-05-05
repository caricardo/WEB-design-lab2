export default class RegisterController {
	constructor(registerModel, registerView) {
		this.registerModel = registerModel;
		this.registerView = registerView;
		this.registerModel.setOnChangeCallback((e) => this.onChangeCallback(e));
		this.registerView.setOnChangeCallback((e) => this.onChangeCallback(e));
		
		this.initOnModelChange();
	}

	onChangeCallback(obj) {
		/* updates UI when a model has changed (title, done attributes) */
		this.registerView.onUpdate(!this.registerModel.is_valid)
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
		this.registerModel = new Proxy(this.registerModel, handler);
	}
}
