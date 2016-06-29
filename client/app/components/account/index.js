import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {login} from './login';
import {signup} from './signup';

export const account = angular
	.module('account', [
		uiRouter,
		login.name,
		signup.name
	]);