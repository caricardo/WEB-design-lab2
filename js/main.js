import CalculatorModel from './model/CalculatorModel.js';
import CalculatorView from './view/CalculatorView.js';
import Controller from './controller/Controller.js';


var calculatorModel = new CalculatorModel();
var calculatorView = new CalculatorView(calculatorModel);

var controller = new Controller(calculatorModel, calculatorView);


window.controller = controller

// export { controller };

//controller.addItem('First Item');
//controller.addItem('Second Item');


//itemListModel.delete(item1.id);
//itemListModel.toggleDone([item2.id]);
