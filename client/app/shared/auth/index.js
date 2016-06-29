import angular from 'angular';
import {authService} from './auth.service';
import {authInterceptor} from './auth.interceptor';

export const auth = angular
	.module('auth', [])
	.factory('Auth', authService)
	.factory('authInterceptor', authInterceptor)
	.config(($httpProvider) => {
		$httpProvider.interceptors.push('authInterceptor');
	});
