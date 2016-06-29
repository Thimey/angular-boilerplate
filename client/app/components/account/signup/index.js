import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {signupDirective} from './signup.directive.js';

export const signup = angular
	.module('signup', [uiRouter])
	.config(($stateProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('signup', {
			url: '/signup',
			template: '<signup></signup>'
		});
	})
	.directive('signup', signupDirective);