import './app.less';
import template from './app.html';

export const appDirective = () => {
	return {
		template,
		replace: true,
		restrict: 'E',
		scope: {}
	};
};