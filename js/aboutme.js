import UserAboutListModel from './model/UserAboutListModel.js';
import UserAboutListView from './view/UserAboutListView.js';
import UserAboutListController from './controller/UserAboutListController.js';

var userAboutListModel = new UserAboutListModel();
var userAboutListView = new UserAboutListView(userAboutListModel);

var controller = new UserAboutListController(userAboutListModel, userAboutListView);

window.controller = controller

controller.addRow("Name", "?")
controller.addRow("Birth_date", "?")
controller.addRow("Sex", "?")
controller.addRow("Email", "?")
