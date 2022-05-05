import UserAboutModel from './UserAboutModel.js';;
export default class UserListModel {
	constructor() {
		this.items = new Array();
		this.onChangeCallback = null;

		return this.initOnModelChange();
	}

	add(key, value) {
		let item = new UserAboutModel(this.items.length + 1, key, value)
		item.onChangeCallback = this.onChangeCallback;
		this.items.push(item);
	}

	delete(itemId) {
		const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
		this.items.splice(itemIndex, 1);
	}

	toggleDone(itemIdList) {
		this.items.map( (item) => {
			if (itemIdList.indexOf(item.id) > -1) item.toggleDone();
		 }); 
	}

	setOnChangeCallback(onChangeCallback) {
		this.onChangeCallback = onChangeCallback;
	}

	initOnModelChange() {
		let handler = {
			set: (obj, prop, val) => {
				obj[prop] = val;
				//if (this.onChangeCallback) this.onChangeCallback(this);
				return true;
			}
		}
		return new Proxy(this, handler);
	}

}
