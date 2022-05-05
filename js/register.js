import RegisterModel from './model/RegisterModel.js';
import RegisterView from './view/RegisterView.js';
import RegisterController from './controller/RegisterController.js';

var registerModel = new RegisterModel();
var registerView = new RegisterView(registerModel);

var controller = new RegisterController(registerModel, registerView);

window.controller = controller
