export default class RegisterView {
	constructor(itemModel) {
		this.itemModel = itemModel;
		this.controllerOnUpdate = null;

	}

	onUpdate(val) {
		document.getElementById("register_button").disabled = val;
	}

	setOnChangeCallback(controllerOnUpdate) {
		this.controllerOnUpdate = controllerOnUpdate;
	}
}
