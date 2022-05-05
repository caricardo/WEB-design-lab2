export default class SigninView {
	constructor(itemModel) {
		this.itemModel = itemModel;
		this.controllerOnUpdate = null;
	}

	onUpdate(val) {
		document.getElementById("signin_button").disabled = val;
	}

	setOnChangeCallback(controllerOnUpdate) {
		this.controllerOnUpdate = controllerOnUpdate;
	}
}
