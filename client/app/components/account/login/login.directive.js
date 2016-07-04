import {loginController as controller} from './login.controller';
import template from './login.html';

const loginDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	}
}

export {loginDirective};