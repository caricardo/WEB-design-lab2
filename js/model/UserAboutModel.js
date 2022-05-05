export default class UserAboutModel {
	constructor(id, key, value) {
		this.id = id;
		this.key = key;
		this.value = value;
		this.done = false;

		this.onChangeCallback = null;
		return this.initOnModelChange();
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