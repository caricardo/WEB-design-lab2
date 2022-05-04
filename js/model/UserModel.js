export default class User {
	constructor(first_name, birth_date, sex, email, password) {
		this.id = Math.round(Math.random() * 100000).toString();
		this.first_name = first_name
		this.birth_date = birth_date
		this.sex = sex
		this.email = email
		this.password = password
		this.done = false;


		return this.initOnModelChange();
	}

	toggleDone() {
		this.done = !this.done;
		return this.done;
	}
	
	setOnChangeCallback() {
		this.onChangeCallback = onChangeCallback;
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
