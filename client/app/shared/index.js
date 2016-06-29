import angular from 'angular';
import {auth} from './auth';
import {api} from './api'

export const shared = angular
	.module('shared', [
		auth.name
	])
	.constant('API', api);
