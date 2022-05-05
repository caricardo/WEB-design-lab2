import UserAboutView from './UserAboutView.js';
export default class UserAbountListView {
	constructor(itemListModel) {
		this.itemListModel = itemListModel;
		this.controllerOnCheckbox = null;
		this.controllerOnAddItem = null;
		this.controllerOnDelItem = null;

		//this.table = document.getElementById("aboutmeTable");
		// document.querySelector('#to-do').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
	}

	// updateView() {
	// 	this.calculator_bits.innerHTML = this.toHtml();
	// }

	// loadData() {
	// 	calculator_bits.innerHTML = "";
	// }

	setControllerOnAddItem(controllerOnAddItem) {
		this.controllerOnAddItem = controllerOnAddItem;
	}

	toHtml() {
		const itemsHtml = this.itemListModel.items.map( (item) => {
			const itemView = new UserAboutView(item);
			return itemView.toHtml();
		}).join("");
		return `
			<table class="table table-sm table-dark calculator-text" id="aboutmeTable">
			<thead>
				<tr>
					<th scope="col" class="col-3 col-sm-2">№</th>
					<th scope="col">Key</th>
					<th scope="col">Value</th>
				</tr>
			</thead>
			${itemsHtml}
			</table>
		`
	}
}