import {home} from './index';
import {homeDirective} from './home.directive';
import template from './home.html';
import {HomeController} from './home.controller';

describe('----home----', () => {
	let $rootScope;
  let makeController;

	beforeEach(window.module(home.name));
	beforeEach(inject(_$rootScope_ => {
		$rootScope = _$rootScope_;
		makeController = (injectables) => {
			return new HomeController(injectables);
		}
	}));

	describe('module', () => {
		it('should have an appropiate name', () => {
			expect(home.name).to.equal('home');
		});
	});

	describe('directive', () => {
		let ddo;
    beforeEach(() => {
      ddo = homeDirective();
    });

    it('should have the right template', () => {
    	expect(ddo.template).to.equal(template);
    });

    it('should have the right controller', () => {
    	expect(ddo.controller).to.equal(HomeController);
    });

    it('should have and isolated scope', () => {
    	expect(ddo.scope).to.be.an('object');
    });

    it('should use a controller as', () => {
    	expect(ddo.controllerAs).to.be.an('string');
    })
	});

	describe('controller', () => {
		it('it should have a message', () => {
			const controller = makeController();
			expect(controller.message).to.equal('ello world!');
		});
	});
});