import SigninModel from './model/SigninModel.js';
import SigninView from './view/SigninView.js';
import SigninController from './controller/SigninController.js';

var signinModel = new SigninModel();
var signinView = new SigninView(signinModel);
var controller = new SigninController(signinModel, signinView);

window.controller = controller
