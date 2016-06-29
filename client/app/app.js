require ('../../node_modules/angular-material/angular-material.css');

import {appDirective} from './app.directive';
// third party mods -->
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
// local mods -->
import {home} from './components/home';
import {shared} from './shared';
import {account} from './components/account';

angular.module('app', [
	uiRouter,
	angularMaterial,
	home.name,
	shared.name,
	account.name
])
.directive('app', appDirective)
.config(($locationProvider) => {
	$locationProvider.html5Mode(true);
});