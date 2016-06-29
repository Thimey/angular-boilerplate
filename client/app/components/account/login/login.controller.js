class LoginController {
	constructor (Auth) {
		this.message = 'login controller!';
	}

	login () {
		console.log('loggin in');
	}
}

LoginController.$inject = ['Auth'];

export {LoginController};