export default class SigninModel {
	constructor() {
		this.id = Math.round(Math.random() * 100000).toString();;
		this.email_input = document.getElementById("email_input")
		this.password_input = document.getElementById("password_input")
		this.remember_me_input = document.getElementById("remember_me_input")

		this.email_input.addEventListener("change", (e) => this.onClick(e));
		this.password_input.addEventListener("change", (e) => this.onClick(e));
		this.remember_me_input.addEventListener("change", (e) => this.onClick(e));

		this.onChangeCallback = null;
		return this.initOnModelChange();
	}
	
	get is_valid() {
		if (this.email_input.value.length <= 0) { return false; }
		if (this.password_input.value.length <= 0) { return false; }

		return true;
	}

	setOnChangeCallback(onChangeCallback) {
		this.onChangeCallback = onChangeCallback;
	}

	onClick(e) {
		this.onChangeCallback()
	}

	initOnModelChange() {
		let handler = {
			set: (obj, prop, val) => {
				obj[prop] = val;
				if (this.onChangeCallback) this.onChangeCallback(this);
				return true;
			}
		}
		return new Proxy(this, handler);
	}
}