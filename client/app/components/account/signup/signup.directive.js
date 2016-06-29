import {SignupController as controller} from './signup.controller.js';
import template from './signup.html';

const signupDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	}
};

export {signupDirective};