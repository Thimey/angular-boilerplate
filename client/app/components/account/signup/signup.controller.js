class SignupController {
	constructor (Auth) {
		this.signupDetails = {};
	}

	signup () {
		console.log('signing up');
	}
}

SignupController.$inject = ['Auth'];

export {SignupController};