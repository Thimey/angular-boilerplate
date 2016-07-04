class loginController {
	constructor (Auth) {
		this.message = 'login controller!';
	}

	login () {
		console.log('loggin in');
	}
}

loginController.$inject = ['Auth'];

export {loginController};