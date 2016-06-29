class SignupController {
	constructor (User) {
		this.signupDetails = {};
		this.User = User;
	}

	signup () {
		this.User.signup(this.signupDetails)
			.then((user) => {

			});
			
	}
}

SignupController.$inject = ['User'];

export {SignupController};