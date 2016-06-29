import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {homeDirective} from './home.directive.js';

export const home = angular
	.module('home', [uiRouter])
	.config(($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			template: '<home></home>',
			resolve: {}
		});
	})
	.directive('home', homeDirective);