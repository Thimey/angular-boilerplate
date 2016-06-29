import './home.less';
import {HomeController as controller} from './home.controller.js';
import template from './home.html';

export const homeDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};