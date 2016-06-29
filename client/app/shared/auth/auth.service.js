const authService = ($window, $http, $q, API) => {

	let user;

	const login = (userDetails) => {
		return $http.post(`${API.url}/auth/local`, userDetails)
			.then(({data}) => {
				user = data.user;
				console.log(user);
			});
	}

	// Handle jwt tokens -->

	const parseToken = (token) => {
		// get payload
		var base64Url = token.split('.')[1];
		// convert to standard base64 (+ and / are removed as they increase the size of string, therefore need to put them back)
		var base64 = base64Url.replace('-', '+').replace('_', '/');
		// decode base64
		var jsonToken = $window.atob(base64);
		// decode standard base64 and return token object
		return JSON.parse(jsonToken);
	}

	const saveToken = (token) => {
		$window.localStorage['jwtToken'] = token;
	}

	const getToken = () => {
		return $window.localStorage['jwtToken'];
	}

	const isAuth = () => {
		var token = getToken();
		if (token) {
			var tokenParams = parseToken(token);
			// Check if token has expired, if so return false
			return Math.round(new Date().getTime/1000) <= tokenParams.exp;
		} else {
			return false;
		}
	}

	return {login, isAuth, getToken, saveToken};
}

authService.$inject = ['$window', '$http', '$q', 'API'];

export {authService};