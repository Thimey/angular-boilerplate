const authInterceptor = ($injector) => {
	return {
		
		// on each request to api, attach token in auth header
		request: (config) => {
			var Auth = $injector.get('Auth');
			var token = Auth.getToken;
			if (config.url.indexOf(API.url) === 0 && token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		},

		// on each response from api, save token if present
		response: (res) => {
			if(res.config.url.indexOf(API.url) === 0 && res.data.token) {
		    auth.saveToken(res.data.token);
		  }
		  return res;
		}

	};
}

authInterceptor.$inject = ['$injector'];

export {authInterceptor};