export default class RegisterModel {
	constructor() {
		this.id = Math.round(Math.random() * 100000).toString();;

		this.register_button = document.getElementById("register_button")
		this.user_name_input = document.getElementById("user_name_input")
		this.birth_date_input = document.getElementById("birth_date_input")
		this.sex_input = document.getElementById("sex_input")
		this.email_input = document.getElementById("email_input")
		this.password_input = document.getElementById("password_input")
		this.password_repeat_input = document.getElementById("password_repeat_input")

		this.register_button.addEventListener("change", (e) => this.onClick(e));
		this.user_name_input.addEventListener("change", (e) => this.onClick(e));
		this.birth_date_input.addEventListener("change", (e) => this.onClick(e));
		this.sex_input.addEventListener("change", (e) => this.onClick(e));
		this.email_input.addEventListener("change", (e) => this.onClick(e));
		this.password_input.addEventListener("change", (e) => this.onClick(e));
		this.password_repeat_input.addEventListener("change", (e) => this.onClick(e));

		this.onChangeCallback = null;
		return this.initOnModelChange();
	}
	
	get is_valid() {
		if (this.user_name_input.value.length <= 0) { return false; }
		if (this.birth_date_input.value.length <= 0) { return false; }
		if (this.sex_input.value.length <= 0) { return false; }
		if (this.email_input.value.length <= 0) { return false; }
		if (this.password_input.value.length <= 0) { return false; }
		if (this.password_repeat_input.value.length <= 0) { return false; }

		return this.password_input.value === this.password_repeat_input.value;
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